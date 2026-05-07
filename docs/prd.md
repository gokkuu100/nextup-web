# NextUp Fitness – Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** 2026-05-07  
**Status:** Draft  
**Stack:** Next.js 14 (App Router) · NeonDB (PostgreSQL serverless) · Google OAuth

---

## 1. Executive Summary

NextUp Fitness is a multi-coach, multi-client online fitness platform that lets certified coaches run their entire business in one place — workout programming, nutrition planning, live and on-demand video classes, direct messaging, progress analytics, and an e-commerce storefront. Clients get a unified, personalised training experience accessible from any device.

---

## 2. Problem Statement

Personal trainers today patch together 4–6 separate tools (scheduling, messaging, workout delivery, nutrition, payments, video) leading to fragmented client experiences and high admin overhead. Clients lose motivation without a single place to track their journey. NextUp Fitness collapses the entire coaching stack into one branded platform.

---

## 3. Goals & Success Metrics

| Goal | KPI | Target (6-month) |
|---|---|---|
| Coach acquisition | Active coaches | 50 |
| Client growth | Monthly active clients | 500 |
| Retention | 30-day client retention | ≥ 70 % |
| Revenue | MRR | $10,000 |
| Engagement | Workouts logged / client / week | ≥ 3 |
| Video | Live class attendance rate | ≥ 60 % |

---

## 4. User Personas

### 4.1 Coach / Trainer
- Certified personal trainer or nutrition coach
- Manages 10–100 clients
- Needs tools to programme, communicate, track, and monetise
- Currently uses Trainerize / PT Distinction / Google Sheets

### 4.2 Client
- Health-conscious individual, 22–45 years old
- Wants accountability, personalised plans, and easy progress tracking
- Prefers mobile-first, low-friction experience

### 4.3 Platform Admin
- Internal staff managing coach approvals, content moderation, and billing oversight

---

## 5. User Stories

### Authentication
- As a user, I can sign in / sign up with Google OAuth so I don't need to manage a password.
- As a new user, I am prompted to complete an onboarding flow that determines my role (coach or client) and collects a profile.

### Coach
- As a coach, I can build multi-week workout programs using an exercise library.
- As a coach, I can assign programs to individual clients or groups.
- As a coach, I can create and publish live and on-demand video classes.
- As a coach, I can design meal plans and assign them to clients.
- As a coach, I can message clients directly and receive notifications.
- As a coach, I can view per-client progress dashboards (metrics, workout logs, nutrition adherence).
- As a coach, I can publish products (digital plans, merchandise) in a storefront.
- As a coach, I can set my availability and accept or reject new clients.

### Client
- As a client, I can browse and follow a coach-assigned workout program.
- As a client, I can log each completed workout including sets, reps, and weight.
- As a client, I can track body metrics (weight, measurements, photos) over time.
- As a client, I can log daily meals using a food search / barcode scanner.
- As a client, I can join live classes or watch on-demand video sessions.
- As a client, I can message my assigned coach.
- As a client, I can purchase products from the platform storefront.
- As a client, I can view my progress charts and compare to targets.

### Admin
- As an admin, I can approve or suspend coach accounts.
- As an admin, I can view platform-wide analytics and revenue reports.
- As an admin, I can manage subscription plans and pricing.

---

## 6. Feature Specifications

### 6.1 Authentication & Onboarding
- Google OAuth 2.0 via NextAuth.js
- Post-auth role selection screen (Coach / Client)
- Coaches: profile setup (bio, specialties, certifications, photo, slug)
- Clients: health intake form (age, goals, fitness level, health conditions)
- All onboarding fields persisted in `coach_profiles` / `client_profiles`

### 6.2 Workout Programs
- Program builder with weeks → days → exercises hierarchy
- Exercise library (global + coach's own private exercises)
- Exercise cards include: sets, reps/duration, rest, tempo, video demo
- Superset grouping support
- Programs can be marked as templates for reuse
- Drag-and-drop reordering of exercises and days
- Assign program to client with a start date

### 6.3 Workout Logging
- Client views today's workout from their assigned program
- Logs sets with actual reps, weight, duration
- Perceived effort rating (1–10 RPE) per session
- Streak and completion stats shown on client dashboard
- Coach can see client's logs in real time

### 6.4 Nutrition & Meal Planning
- Coach creates multi-day meal plans (breakfast, lunch, dinner, snacks)
- Food search powered by food database (name + barcode lookup)
- Macro targets (calories, protein, carbs, fat) set per plan
- Client food diary: daily logging per meal type
- Daily macro summary chart vs target
- AI-assisted nutritional analysis (Phase 2)

### 6.5 Progress Tracking
- Client logs body metrics: weight, body fat %, measurements, resting HR
- Time-series charts per metric
- Progress photo upload (private by default)
- Coach can view all client progress entries
- Weekly check-in reminder notification

### 6.6 Video Classes
- **Live:** Coach starts a live stream, clients join via video SDK (e.g. Daily.co or Mux)
- **On-demand:** Coach uploads video (stored on Mux / Cloudflare Stream)
- Class details: category, level, duration, scheduled time, max attendees
- Client can register for upcoming live classes and get reminders
- Attendance tracked (join time, watch duration)
- Classes can be public (free preview) or gated (requires subscription/purchase)

### 6.7 Coach–Client Messaging
- Direct message conversations between coach and each client
- Supports text, image, and file attachments
- Real-time delivery via WebSockets or Server-Sent Events
- Unread message badges and push notifications
- Conversation list sorted by most recent activity

### 6.8 E-commerce Storefront
- Coach or admin can create products: physical goods, digital downloads, subscription plans
- Product listing page per coach (`/coaches/:slug/store`)
- Cart → checkout → order confirmation flow
- Order status tracking
- Payment provider abstraction layer (Stripe / PayPal – to be finalised)
- Purchased digital products unlocked in client dashboard

### 6.9 Subscriptions & Access Control
- Platform subscription plans control feature access
- Coaches subscribe to a coach plan (controls max clients, features)
- Clients can be on a free tier or a paid client plan
- Middleware-based route protection based on subscription status
- Subscription managed via `user_subscriptions` table; payment provider webhooks update status

### 6.10 Notifications
- In-app notification centre
- Email notifications (Resend / SendGrid)
- Push notifications (web push via service worker)
- Notification types: new message, workout reminder, class reminder, new assignment, payment confirmation

### 6.11 Admin Dashboard
- Coach approval queue
- Platform analytics: MAU, revenue, content metrics
- Subscription plan management
- Content moderation (flag/remove videos, products)

---

## 7. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Page load (LCP) | < 2.5 s on 4G |
| API response time | < 200 ms p95 |
| Uptime | 99.9 % |
| Database | NeonDB serverless PostgreSQL – auto-scale |
| Auth token | JWT via NextAuth, server-side session validation |
| File storage | S3-compatible (AWS S3 or Cloudflare R2) |
| Video hosting | Mux or Cloudflare Stream |
| GDPR / data privacy | User data export + delete endpoint |
| Accessibility | WCAG 2.1 AA |

---

## 8. Out of Scope (v1)

- Native mobile app (iOS / Android)
- In-person session booking / calendar scheduling
- Wearable device integrations (Apple Watch, Garmin)
- Group challenges / leaderboards
- AI workout generation
- Multi-language / i18n

---

## 9. Dependencies & Integrations

| Service | Purpose | Status |
|---|---|---|
| Google OAuth | Authentication | Confirmed |
| NeonDB | Primary database | Confirmed |
| NextAuth.js | Auth session management | Confirmed |
| Mux / Cloudflare Stream | Video hosting & live streaming | TBD |
| Cloudflare R2 / AWS S3 | File & image storage | TBD |
| Resend / SendGrid | Transactional email | TBD |
| Stripe / PayPal | Payment processing | TBD |
| Daily.co / 100ms | Live video SDK | TBD |

---

## 10. Release Plan

| Milestone | Scope | Target |
|---|---|---|
| M1 – Foundation | Auth, profiles, coach-client link, basic dashboard | Week 3 |
| M2 – Workouts | Exercise library, program builder, client assignment, workout logging | Week 6 |
| M3 – Nutrition | Food DB, meal plan builder, client food diary | Week 9 |
| M4 – Video | On-demand upload, live class scheduling, attendance | Week 12 |
| M5 – Messaging | Real-time DMs, notifications | Week 14 |
| M6 – Commerce | Product store, cart, checkout, orders | Week 17 |
| M7 – Analytics & Polish | Progress dashboards, admin panel, performance hardening | Week 20 |