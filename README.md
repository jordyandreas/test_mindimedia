This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Additional Questions
Please provide your answers in your README file or a separate document.
Front End Implementation

1. Component Structure: How do you design component hierarchy to ensure reusability and maintainability?
   answer:
1. Component Structure

I organize the codebase in three main layers:

components/ui

Small, reusable, presentation-only components.

No page-specific assumptions.

Examples: MapPin, LocationModal, Button, Card, SectionHeading.

These are interchangeable building blocks, similar to a design system.

components/common

Shared structural components that appear across multiple pages.

Usually include layout or some small logic.

Examples: Navbar, Footer, PageSectionWrapper, ScrollHint.

They understand the site (branding, navigation), but not one specific page.

modules/[section] or modules/[page]

High-level feature modules / page slices.

These combine UI components + data + local state.

Examples:

modules/map/UlamanMapSection.tsx (interactive resort map + pins + modal)

modules/about/AboutHeroSection.tsx

modules/spa/SpaHighlightsSection.tsx

Each module is responsible for rendering one meaningful section on a page (like a slice in a CMS).

Why this helps:

Reusability → components/ui can be used anywhere.

Maintainability → logic and data for a section live together in its module.

Scalability → adding a new page is just adding a new folder under modules/.

This is better than dumping everything in /components because it keeps “page-level feature sections” (modules) separate from generic UI.

2. State Management: What approach do you use for state management (global vs local) and how do you decide between
   them?
   answer: State Management

I use a hybrid approach:

Local state (useState, useReducer) for UI-specific concerns (modals, dropdowns, hover states).

Global state (React Context, Zustand, or Redux Toolkit) for data shared across pages (auth, user profile, site settings).

The decision depends on scope and reusability:
If multiple components or pages need access → global.
If it’s local and ephemeral → local.

3. Responsive Strategy: What techniques do you implement to ensure consistency across different screen sizes?
   answer:
4. Responsive Strategy

I use mobile-first design with:

TailwindCSS responsive utilities (sm:, md:, lg:) for fluid breakpoints.

Flex/grid layouts and clamp() / minmax() for scalable typography and spacing.

Image optimization via <Image /> (Next.js) with adaptive sizes.

Aspect ratios to maintain visual consistency across devices.

4. Performance Optimization: What methods do you use to optimize bundle size and loading time in Nuxt.js/Next.js?
   Data Management
   answer:
5. Performance Optimization

Key methods:

Code splitting and dynamic imports for large modules.

Static generation (SSG) or ISR for caching pages.

Image optimization via Next.js Image component + blurDataURL placeholders.

Tree-shaking and bundle analysis (next-bundle-analyzer).

Preload critical fonts and scripts via next/head.

Use of Edge Functions / CDN caching for faster global delivery.

5. Data Fetching: If using local JSON, how do you structure data to be scalable for supporting multiple page types?
   answer:
6. Data Fetching (Local JSON)

For local JSON content, I use a scalable folder-based structure:

/data
├── rooms.json
├── facilities.json
├── galleries.json
└── pages/
├── home.json
└── spa.json

Each JSON follows a consistent schema with IDs, metadata, and localization fields.
Pages read data dynamically based on slug (e.g. /data/pages/[slug].json) to support multiple page types.

6. API Integration: If creating custom API, what design patterns do you use for handling loading states, error handling, and caching?
   answer:
7. API Integration
   For APIs, I follow a service pattern:

/utils/api/
├── client.ts → axios instance with interceptors
├── getRooms.ts
├── getFacilities.ts

Each service handles:

Loading states via React Query or SWR.

Error handling using Axios interceptors and toast notifications.

Caching and revalidation via React Query for performance and offline safety.

7. Content Structure: How do you organize content types (rooms, facilities, gallery) in a flexible data structure?
   Deployment & Infrastructure
   answer:
8. Content Structure

Content is modeled in normalized JSON or database tables:

rooms → name, slug, images[], price, amenities[]

facilities → category, icon, description

gallery → type (photo/video), related_id (room/facility)

This structure makes it easy to reuse data across pages (e.g. “Facilities” on both the Home and Spa page).

8. Vercel Deployment: What configurations are needed for optimal performance on Vercel?
   answer:
9. Vercel Deployment

For optimal Vercel performance:

Use static generation (SSG) when possible.

Enable image optimization and Edge Middleware for caching.

Configure vercel.json:

{
"cleanUrls": true,
"trailingSlash": false,
"headers": [
{
"source": "/(.\*)",
"headers": [{ "key": "Cache-Control", "value": "public,max-age=31536000,immutable" }]
}
]
}

Set up environment variables in Vercel dashboard (NEXT_PUBLIC_API_URL, etc.).

9. Environment Setup: How do you set up environment variables for development vs production?
   answer:
   Use .env.development and .env.production:

NEXT_PUBLIC_API_URL=https://staging.api.com
NEXT_PUBLIC_SITE_NAME=Ulaman Dev

Never commit .env — values differ by environment (staging, prod).
Use process.env.NEXT*PUBLIC*\* for client-safe variables only.

10. Asset Optimization: What is your strategy for optimally handling images, fonts, and static assets?
    CMS Integration (Bonus Points)
    answer:
11. Asset Optimization

Images: Serve via Next.js <Image /> with responsive sizes and CDN caching.

Fonts: Use Next.js font optimization (next/font/google) or self-hosted WOFF2.

Static assets: Store in /public and compress with WebP / AVIF.

Lazy loading non-critical media for LCP optimization.

11. API Design: If implementing Laravel Filament, how do you design the REST API structure for frontend consumption?
    answer:
12. API Design (Laravel Filament)

Design a REST API with versioning:

GET /api/v1/rooms
GET /api/v1/rooms/{slug}
GET /api/v1/facilities

Use resource transformers for consistent JSON shape and pagination meta fields.
Include updated_at, slug, and relations (gallery, amenities) for frontend hydration.

12. Content Modeling: What is your database design approach to support dynamic content management?
    answer:
13. Content Modeling

Database tables (simplified):

rooms
├─ id
├─ name
├─ slug
├─ description
├─ price
├─ images (JSON)
├─ category_id (FK)
categories
├─ id
├─ name
facilities
├─ id
├─ name
├─ icon
├─ description

Relations are defined in Eloquent with hasMany / belongsTo for flexible CMS content.

13. Admin UX: What features are important in the admin panel to facilitate easy content management?
    answer:
14. Admin UX

Key admin panel features:

Inline editing & preview for instant feedback.

Media library with drag-and-drop upload + auto WebP compression.

Role-based access control (RBAC).

Revision history / soft delete.

Reusable blocks (hero, gallery, map) for dynamic page composition.
