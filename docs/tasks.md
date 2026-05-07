# NextUp Fitness – Tasks

**Format:** `[PRIORITY] TASK-ID | Description | Milestone`  
Priority: 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low

---

## M1 – Foundation

### Infrastructure
- 🔴 INFRA-01 | Scaffold Next.js 14 App Router project with TypeScript | M1
- 🔴 INFRA-02 | Configure NeonDB connection with `@neondatabase/serverless` + Drizzle ORM | M1
- 🔴 INFRA-03 | Run `schema.sql` against Neon project; verify all tables & indexes | M1
- 🔴 INFRA-04 | Set up environment variable structure (`.env.local`, Vercel secrets) | M1
- 🟠 INFRA-05 | Configure Vercel deployment pipeline with preview + production branches | M1
- 🟠 INFRA-06 | Set up Cloudflare R2 bucket + signed URL helper for file uploads | M1
- 🟡 INFRA-07 | Integrate Sentry for error monitoring | M1

### Authentication
- 🔴 AUTH-01 | Install and configure NextAuth.js v5 with Google OAuth provider | M1
- 🔴 AUTH-02 | Create `users` record on first login (upsert by `google_sub`) | M1
- 🔴 AUTH-03 | Role selection screen post-auth (Coach / Client) | M1
- 🔴 AUTH-04 | Protect all `/dashboard` routes with session middleware | M1
- 🟠 AUTH-05 | Admin role assignment (manual DB flag for now) | M1

### Onboarding
- 🔴 ONBOARD-01 | Coach onboarding form: bio, specialties, certifications, photo, slug | M1
- 🔴 ONBOARD-02 | Client health intake form: DOB, gender, height, weight, goal, level | M1
- 🔴 ONBOARD-03 | Persist onboarding data to `coach_profiles` / `client_profiles` | M1
- 🟠 ONBOARD-04 | Skip/complete-later logic with `onboarding_complete` flag | M1

### Coach–Client Relationship
- 🔴 REL-01 | Coach dashboard: invite client by email | M1
- 🔴 REL-02 | Create `coach_clients` record on acceptance | M1
- 🟠 REL-03 | Coach: view & manage client roster | M1
- 🟠 REL-04 | Client: view assigned coach profile | M1

---

## M2 – Workouts

### Exercise Library
- 🔴 EX-01 | Seed global exercise library (200+ exercises with categories) | M2
- 🔴 EX-02 | Exercise search UI (name filter + muscle group tags) | M2
- 🟠 EX-03 | Coach: create custom private exercise with video URL | M2
- 🟡 EX-04 | Exercise detail modal with instructions + video embed | M2

### Program Builder
- 🔴 PROG-01 | Create / edit program form (title, goal, level, duration) | M2
- 🔴 PROG-02 | Add weeks and days to program | M2
- 🔴 PROG-03 | Add exercises to a day with sets/reps/rest/notes | M2
- 🟠 PROG-04 | Drag-and-drop exercise reorder within a day | M2
- 🟠 PROG-05 | Superset grouping UI | M2
- 🟠 PROG-06 | Save program as reusable template | M2
- 🔴 PROG-07 | Publish / draft / archive program status | M2
- 🔴 PROG-08 | Assign program to client with start date | M2

### Workout Logging
- 🔴 LOG-01 | Client: today's workout view from active program | M2
- 🔴 LOG-02 | Log sets: actual reps, weight, duration per exercise | M2
- 🔴 LOG-03 | Mark workout session complete; persist to `workout_logs` | M2
- 🟠 LOG-04 | RPE (1–10) rating per session | M2
- 🟠 LOG-05 | Coach: view client's workout log history | M2
- 🟡 LOG-06 | Workout streak counter on client dashboard | M2

---

## M3 – Nutrition

### Food Database
- 🔴 FOOD-01 | Seed food database (USDA open data / 10,000+ items) | M3
- 🔴 FOOD-02 | Food search API endpoint with `pg_trgm` fuzzy matching | M3
- 🟠 FOOD-03 | Barcode lookup endpoint (Open Food Facts integration) | M3
- 🟡 FOOD-04 | Coach / client: add custom food item | M3

### Meal Plan Builder
- 🔴 MEAL-01 | Create meal plan (title, goal, macro targets) | M3
- 🔴 MEAL-02 | Add days and meals (breakfast/lunch/dinner/snacks) | M3
- 🔴 MEAL-03 | Add foods to meals with quantity; auto-calculate macros | M3
- 🟠 MEAL-04 | Save meal plan as template | M3
- 🔴 MEAL-05 | Assign meal plan to client | M3

### Client Food Diary
- 🔴 DIARY-01 | Daily food log UI: add/remove entries per meal type | M3
- 🔴 DIARY-02 | Macro summary chart (daily actual vs target) | M3
- 🟠 DIARY-03 | Weekly nutrition history view | M3
- 🟠 DIARY-04 | Coach: view client's nutrition logs | M3

---

## M4 – Video Classes

### On-Demand
- 🔴 VOD-01 | Coach: upload video to Mux / Cloudflare Stream | M4
- 🔴 VOD-02 | Create class listing (title, category, level, description) | M4
- 🔴 VOD-03 | Client: browse on-demand class library | M4
- 🔴 VOD-04 | Video player with watch progress tracking | M4
- 🟠 VOD-05 | Access gate: public vs gated (subscription/purchase check) | M4

### Live Classes
- 🔴 LIVE-01 | Coach: schedule a live class (date, time, max attendees) | M4
- 🔴 LIVE-02 | Client: register for live class and add to calendar | M4
- 🔴 LIVE-03 | Integrate live video SDK (Daily.co or 100ms) | M4
- 🔴 LIVE-04 | Coach: start / end live stream | M4
- 🟠 LIVE-05 | Track attendance: join time, leave time, watch duration | M4
- 🟠 LIVE-06 | Email + in-app reminder 1 hour before class | M4

---

## M5 – Messaging & Notifications

### Messaging
- 🔴 MSG-01 | Create conversation between coach and client | M5
- 🔴 MSG-02 | Real-time message delivery (WebSocket via Pusher / Ably or SSE) | M5
- 🔴 MSG-03 | Conversation list UI sorted by most recent | M5
- 🔴 MSG-04 | Message thread UI with timestamps | M5
- 🟠 MSG-05 | Image and file attachment support | M5
- 🟠 MSG-06 | Unread message badge count | M5
- 🟡 MSG-07 | Message soft-delete | M5

### Notifications
- 🔴 NOTIF-01 | In-app notification centre UI | M5
- 🔴 NOTIF-02 | Notification triggers: new message, workout reminder, class reminder | M5
- 🟠 NOTIF-03 | Transactional email via Resend (new assignment, payment confirmation) | M5
- 🟡 NOTIF-04 | Web push notifications via service worker | M5

---

## M6 – E-commerce

### Products & Store
- 🔴 SHOP-01 | Coach: create product (name, price, type, description, images) | M6
- 🔴 SHOP-02 | Coach storefront page `/coaches/:slug/store` | M6
- 🔴 SHOP-03 | Product detail page | M6
- 🟠 SHOP-04 | Digital product delivery on order completion | M6

### Cart & Checkout
- 🔴 CART-01 | Add to cart / remove from cart (client-side state) | M6
- 🔴 CART-02 | Checkout flow: review → payment → confirmation | M6
- 🔴 CART-03 | Payment provider integration (Stripe or PayPal) | M6
- 🔴 CART-04 | Persist order to `orders` + `order_items` | M6
- 🟠 CART-05 | Webhook handler: update order status on payment events | M6
- 🟠 CART-06 | Order history page for client | M6

### Subscriptions
- 🔴 SUB-01 | Subscription plan listing page | M6
- 🔴 SUB-02 | Subscribe flow with payment provider | M6
- 🔴 SUB-03 | Subscription status middleware (gate features) | M6
- 🟠 SUB-04 | Cancel / reactivate subscription | M6
- 🟡 SUB-05 | Proration handling for plan upgrades | M6

---

## M7 – Analytics, Admin & Polish

### Progress Dashboards
- 🔴 PROG-DASH-01 | Client: body metric log UI (weight, measurements, photos) | M7
- 🔴 PROG-DASH-02 | Time-series charts per metric (Recharts) | M7
- 🟠 PROG-DASH-03 | Coach: per-client progress overview | M7
- 🟠 PROG-DASH-04 | Weekly check-in reminder notification | M7

### Admin Panel
- 🔴 ADMIN-01 | Coach approval queue (approve / reject / suspend) | M7
- 🟠 ADMIN-02 | Platform analytics: MAU, active coaches, revenue | M7
- 🟠 ADMIN-03 | Subscription plan CRUD | M7
- 🟡 ADMIN-04 | Content moderation tools (flag / remove video / product) | M7

### Performance & Quality
- 🔴 PERF-01 | Image optimisation via Next.js `<Image>` + Cloudflare CDN | M7
- 🔴 PERF-02 | Database query analysis; add missing indexes | M7
- 🟠 PERF-03 | API route caching with `unstable_cache` / Redis | M7
- 🟠 PERF-04 | Lighthouse CI in deployment pipeline (LCP < 2.5 s) | M7
- 🔴 QA-01 | End-to-end tests for auth, workout log, checkout flows (Playwright) | M7
- 🟠 QA-02 | Unit tests for DB queries and utility functions (Vitest) | M7
- 🟡 QA-03 | Accessibility audit (axe-core); fix WCAG 2.1 AA issues | M7