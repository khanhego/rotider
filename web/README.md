# Rotider Website

Next.js marketing site for Rotider.

## Project structure

```
web/src/
  app/          # Next.js App Router routes (thin re-exports)
  views/        # Page view components — add new pages here
  components/   # Shared UI components
  lib/          # CMS, config, SEO, utils
  types/        # TypeScript types
```

## Getting started

```bash
cd web
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new page

1. Create `src/views/<name>.tsx` with component, `generateMetadata`, and UI composition.
2. Add `src/app/<route>/page.tsx` that re-exports from `@/views/<name>`.
3. Set `export const revalidate = …` directly in `page.tsx` if needed (cannot re-export).

Example:

```tsx
// src/views/about.tsx
export async function generateMetadata() { ... }
export default async function AboutPage() { ... }

// src/app/about/page.tsx
export { default, generateMetadata } from '@/views/about';
export const revalidate = 3600;
```

## CMS

Set `CMS_GRAPHQL_URL` in `.env.local` to connect GraphQL CMS. Without it, mock data is used.
