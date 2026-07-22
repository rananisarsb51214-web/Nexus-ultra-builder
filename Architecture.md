┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                                 │
│  Next.js 15 + React 19 + TypeScript + Tailwind CSS + Framer Motion │
│  ├── Landing Page (Marketing)                                       │
│  ├── Dashboard (Admin)                                              │
│  ├── Website Builder (Visual Editor)                                │
│  ├── Analytics Dashboard                                            │
│  └── Settings & Configuration                                       │
└────────────────────────────┬────────────────────────────────────────┘
                             │
                    (HTTPS/WebSocket)
                             │
┌────────────────────────────▼────────────────────────────────────────┐
│                      API LAYER                                       │
│              Next.js API Routes + TypeScript                        │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Authentication Endpoints                                     │   │
│  │ - POST /api/auth/signin                                      │   │
│  │ - POST /api/auth/signup                                      │   │
│  │ - GET  /api/auth/session                                     │   │
│  │ - POST /api/auth/signout                                     │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Website Management Endpoints                                 │   │
│  │ - GET    /api/websites                    (list)             │   │
│  │ - POST   /api/websites                    (create)           │   │
│  │ - GET    /api/websites/[id]               (read)             │   │
│  │ - PUT    /api/websites/[id]               (update)           │   │
│  │ - DELETE /api/websites/[id]               (delete)           │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Page Management Endpoints                                    │   │
│  │ - GET    /api/websites/[id]/pages                            │   │
│  │ - POST   /api/websites/[id]/pages                            │   │
│  │ - GET    /api/websites/[id]/pages/[pageId]                  │   │
│  │ - PUT    /api/websites/[id]/pages/[pageId]                  │   │
│  │ - DELETE /api/websites/[id]/pages/[pageId]                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ AI Features Endpoints                                        │   │
│  │ - POST /api/ai/generate        (content generation)          │   │
│  │ - POST /api/ai/chat            (conversational AI)           │   │
│  │ - POST /api/websites/generate  (website generation)          │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Analytics Endpoints                                          │   │
│  │ - GET    /api/analytics/[websiteId]                          │   │
│  │ - POST   /api/analytics/events                               │   │
│  │ - GET    /api/analytics/reports                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Billing Endpoints                                            │   │
│  │ - POST   /api/billing/checkout                               │   │
│  │ - GET    /api/billing/subscription                           │   │
│  │ - POST   /api/billing/cancel                                 │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Webhook Endpoints                                            │   │
│  │ - POST /api/webhooks/stripe                                  │   │
│  │ - POST /api/webhooks/analytics                               │   │
│  └──────────────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────────────┘
                             │
                    (Node.js Runtime)
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼─────────┐ ┌────────▼──────────┐ ┌─────▼──────────────┐
│  BUSINESS LOGIC │ │  DATA VALIDATION  │ │  ERROR HANDLING    │
│  & UTILITIES    │ │  & SANITIZATION   │ │  & LOGGING         │
├─────────────────┤ ├───────────────────┤ ├────────────────────┤
│ lib/utils.ts    │ │ lib/crypto.ts     │ │ Built-in logging   │
│ lib/ai.ts       │ │ Input validation  │ │ Error tracking     │
│ lib/auth.ts     │ │ Rate limiting     │ │ Audit logging      │
│ lib/db.ts       │ │ CSRF protection   │ │ Request logging    │
└─────────────────┘ └───────────────────┘ └────────────────────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                (Database Access Layer - Prisma ORM)
                             │
        ┌────────────────────┼────────────────────┬──────────────┐
        │                    │                    │              │
┌───────▼─────────┐ ┌────────▼──────────┐ ┌─────▼───────────┐ ┌─▼────────────┐
│   PostgreSQL    │ │   Prisma Client   │ │  Data Models    │ │ Cache Layer  │
│   Database      │ │   & Migration     │ │  (15+ tables)   │ │ (Optional)   │
│                 │ │                   │ │                 │ │ Redis        │
│ - Users         │ │ - Type-safe ORM   │ │ - Users         │ │              │
│ - Organizations │ │ - Query builder   │ │ - Websites      │ │ - Caching    │
│ - Workspaces    │ │ - Relationships   │ │ - Pages         │ │ - Sessions   │
│ - Websites      │ │ - Migrations      │ │ - Analytics     │ │ - Queues     │
│ - Pages         │ │                   │ │ - Billing       │ │              │
│ - Analytics     │ │                   │ │                 │ │              │
│ - Billing       │ │                   │ │                 │ │              │
└─────────────────┘ └───────────────────┘ └─────────────────┘ └──────────────┘