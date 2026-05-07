# NextUp Fitness – Rules & Engineering Conventions

**Version:** 1.0  
**Stack:** Next.js 14 (App Router) · TypeScript · NeonDB · Drizzle ORM · NextAuth.js v5

These rules are authoritative. All contributors must follow them. They exist to keep the codebase consistent, secure, and maintainable as the team and feature set grow.

---

## 1. Project Structure

```
/
├── app/                      # Next.js App Router
│   ├── (auth)/               # Public auth pages
│   ├── (dashboard)/          # Protected routes
│   │   ├── coach/            # Coach-specific pages
│   │   ├── client/           # Client-specific pages
│   │   └── admin/            # Admin pages
│   ├── api/                  # Route handlers
│   │   ├── auth/             # NextAuth routes
│   │   └── v1/               # App API routes
│   └── layout.tsx
├── components/
│   ├── ui/                   # Primitive / design-system components
│   └── features/             # Domain-specific components
├── lib/
│   ├── db/                   # Drizzle schema + query helpers
│   ├── auth/                 # Session utilities
│   └── utils/                # Shared helpers
├── server/                   # Server-only logic (actions, services)
│   ├── actions/              # Next.js Server Actions
│   └── services/             # Business logic layer
├── hooks/                    # Custom React hooks
├── types/                    # Global TypeScript types
└── public/
```

**Rules:**
- Never import server-only code inside `components/` or `hooks/`. Use Server Actions or API routes as the boundary.
- Each feature directory owns its own components, hooks, and types. Do not scatter feature code.
- Use barrel `index.ts` files only at the top level of `components/ui/`. Avoid barrel files elsewhere.

---

## 2. TypeScript

- **Strict mode is always on.** `"strict": true` in `tsconfig.json`. No exceptions.
- Never use `any`. Use `unknown` and narrow with type guards.
- Derive types from Drizzle schema inference (`typeof schema.users.$inferSelect`) instead of duplicating type definitions.
- All function parameters and return types must be explicitly typed.
- Prefer `type` over `interface` for object shapes. Use `interface` only when extension is intentional.
- Use Zod for all external input validation (form data, API payloads, environment variables).

---

## 3. Database Rules

### Drizzle ORM
- All DB interactions go through Drizzle. Raw SQL is only permitted in one-off migration scripts.
- Use `neon()` serverless driver from `@neondatabase/serverless` for edge-compatible queries.
- Keep Drizzle schema definitions in `/lib/db/schema/` — one file per domain (e.g., `users.ts`, `workouts.ts`).
- All schema changes go through Drizzle migrations (`drizzle-kit generate`). Never alter production DB by hand.

### Query Rules
- Never `SELECT *`. Always select specific columns.
- All user-facing list queries must include `LIMIT` (default max 100).
- Queries that touch multiple tables must use transactions when writes are involved.
- Coach can only query data for clients in their `coach_clients` relationship (`is_active = true`). Enforce this in the service layer.
- UUIDs are the primary key type everywhere. Never expose sequential integer IDs.

### Migrations
- Migration files are append-only. Never edit a committed migration.
- Each migration file must have a descriptive name: `YYYYMMDD_add_video_classes.sql`.
- Run migrations in CI before deploying. Failed migrations block the deploy.

---

## 4. Authentication & Authorisation

- Authentication is handled exclusively by **NextAuth.js v5** with the Google OAuth provider.
- Session data stored server-side (database strategy). Never store sensitive data in the JWT.
- The `users.role` field is the authoritative source of role. Read it from the DB on each request; do not trust a role claim in the session cookie alone.
- All protected routes use the NextAuth middleware in `middleware.ts` with matcher patterns.
- Server Actions must call `auth()` and verify role before executing any mutation.
- Client components must never contain access-control logic. Gate at the server/layout level.
- Implement Row-Level Security (RLS) in NeonDB as a defence-in-depth layer.

### Role Matrix

| Resource | Admin | Coach | Client |
|---|---|---|---|
| Manage any user | ✅ | ❌ | ❌ |
| Create programs | ✅ | ✅ | ❌ |
| View own program | ✅ | ✅ | ✅ (assigned only) |
| View client data | ✅ | ✅ (own clients) | ✅ (own only) |
| Publish video class | ✅ | ✅ | ❌ |
| Place orders | ✅ | ✅ | ✅ |
| Admin panel access | ✅ | ❌ | ❌ |

---

## 5. API Design

- All app API routes live under `/api/v1/`.
- Use **Next.js Route Handlers** (`route.ts`) for REST-style endpoints.
- Use **Server Actions** for form mutations and dashboard interactions (preferred over REST for mutations).
- All route handlers must validate input with Zod before processing.
- Return consistent JSON shapes:
  ```ts
  // Success
  { data: T, meta?: { page, total } }
  // Error
  { error: { code: string, message: string } }
  ```
- HTTP status codes must be semantically correct (200, 201, 400, 401, 403, 404, 422, 500).
- Never return stack traces or internal error details to the client in production.
- Rate-limit public endpoints (auth, search) using middleware (e.g., Upstash Redis).

---

## 6. File & Media Uploads

- All uploads go to **Cloudflare R2** (or AWS S3). Never store binary data in PostgreSQL.
- Generate a presigned URL server-side; client uploads directly to R2.
- Enforce file size limits server-side (images: 5 MB, videos: handled by Mux/Cloudflare Stream).
- Validate MIME type server-side (do not trust `Content-Type` header from client).
- Store only the object key (path) in the DB, not the full URL. Construct the URL at render time using a helper.
- Progress photos are private by default (`is_private = true`). Signed URLs expire after 1 hour.

---

## 7. Video

- Use **Mux** or **Cloudflare Stream** for all video transcoding and delivery. Never serve raw video from R2.
- On-demand: upload via provider API from server; store `video_url` (Mux playback ID or Stream UID) in `video_classes`.
- Live: generate stream key server-side; store in `video_classes.stream_key`. Never expose the stream key to any client other than the coach who owns it.
- Restrict video access: gated classes require an active subscription or purchase check via a server-side token endpoint.

---

## 8. Payments

- All payment processing goes through the chosen provider (Stripe or PayPal). No card data ever touches our server.
- Store `provider_txn_id` and `payment_provider` fields for reconciliation. Never store card details.
- All order status updates come from **webhooks**, not from client-initiated requests.
- Verify webhook signatures before processing.
- Idempotency: use `provider_txn_id` to guard against duplicate webhook delivery.
- Refunds are initiated server-side via admin action only. Clients cannot trigger refunds directly.

---

## 9. Real-Time (Messaging)

- Use **Pusher** or **Ably** for WebSocket-based real-time messaging in v1.
- Server Action writes the message to DB first, then triggers the real-time event.
- The real-time event is supplementary; the DB is the source of truth.
- Clients must re-fetch message history on reconnect (do not rely solely on the WebSocket stream).
- Only deliver messages to conversation participants. Validate server-side before broadcasting.

---

## 10. Code Style

- **Formatter:** Prettier with default config. Auto-format on save and in CI.
- **Linter:** ESLint with `eslint-config-next` + `@typescript-eslint/recommended`.
- No `console.log` in production code. Use a structured logger (e.g., `pino`).
- Named exports everywhere. Default exports only for Next.js page and layout files.
- No magic numbers. Extract constants to a `constants/` file or co-located `*.constants.ts`.
- Boolean props and variables should be prefixed: `isLoading`, `hasError`, `canEdit`.
- Event handler functions should be prefixed `handle`: `handleSubmit`, `handleDelete`.

---

## 11. Component Rules

- Use **Server Components by default**. Add `"use client"` only when browser APIs or interactivity is required.
- Never fetch data in a Client Component directly. Fetch in a Server Component and pass as props.
- Each component file should export one primary component. Split large components.
- Co-locate component-specific types in the same file.
- Use `shadcn/ui` as the primitive component library. Do not install competing UI libraries.
- Responsive design is mobile-first. Use Tailwind breakpoints (`sm:`, `md:`, `lg:`).

---

## 12. Security

- Sanitise all user-generated text displayed in the UI using DOMPurify where HTML rendering is needed.
- All DB queries use parameterised statements via Drizzle (never string-concatenated SQL).
- CSP headers configured in `next.config.ts`.
- `httpOnly` and `Secure` flags set on all session cookies (handled by NextAuth).
- Sensitive environment variables (secrets, API keys) never committed to the repo. Validate with Zod in `lib/env.ts`.
- GDPR: provide `/api/v1/user/export` (full data export) and `/api/v1/user/delete` (right to erasure) endpoints.

---

## 13. Testing

- **Unit tests:** Vitest for pure functions and DB query utilities.
- **Integration tests:** Vitest + `@neondatabase/serverless` against a test Neon branch.
- **E2E tests:** Playwright for critical user flows (sign-in, workout log, checkout).
- Tests live in `__tests__/` adjacent to the file under test, or in a top-level `e2e/` folder for E2E.
- CI must pass all tests before merging to `main`.
- Minimum coverage targets: 70 % for `server/services/`, 50 % overall.

---

## 14. Git & Branching

- **Branch strategy:** `main` (production) → `develop` (integration) → feature branches.
- Branch naming: `feat/TASK-ID-short-description`, `fix/TASK-ID-short-description`, `chore/description`.
- Commits follow **Conventional Commits**: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`.
- Pull requests require at least one reviewer approval before merge.
- Squash merge to `develop`; regular merge to `main`.
- Never commit directly to `main` or `develop`.
- All PRs must pass CI (lint, type-check, tests, Lighthouse) before merge.

---

## 15. Environment Variables

All environment variables must be:

1. Declared in `.env.example` with placeholder values (committed to repo).
2. Validated in `/lib/env.ts` using Zod at startup.
3. Prefixed `NEXT_PUBLIC_` only if they are genuinely safe to expose to the browser.

```ts
// lib/env.ts (example pattern)
import { z } from 'zod';
const schema = z.object({
  DATABASE_URL:          z.string().url(),
  GOOGLE_CLIENT_ID:      z.string().min(1),
  GOOGLE_CLIENT_SECRET:  z.string().min(1),
  NEXTAUTH_SECRET:       z.string().min(32),
  R2_BUCKET_NAME:        z.string().min(1),
  // ... etc
});
export const env = schema.parse(process.env);
```