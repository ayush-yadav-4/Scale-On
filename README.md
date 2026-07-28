# ScaleOn

Marketing website for ScaleOn — an IT agency focused on web development, cloud, AI automation, and custom websites.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Vitest + Playwright

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality commands

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
npm run verify
```

## Contact form delivery

`POST /api/contact` validates payloads with Zod, applies basic rate limiting, and delivers via `CONTACT_WEBHOOK_URL` when configured.

- Local/dev without a webhook: accepts submissions without logging PII
- Production without a webhook: returns `502` and asks the user to email `hello@scaleon.io`

Never log raw form fields.

## Content ownership

- Unsupported logo/stat claims were removed or replaced with verifiable team facts
- Blog cards are previews until full articles are published
- Privacy/Terms live at `/privacy` and `/terms`

## Architecture notes

- Marketing routes are server components that compose client islands for interactivity/animation
- Contact intake is `POST /api/contact` with Zod validation, rate limiting, and webhook delivery
- Security headers and CSP are configured in `next.config.mjs`
- Client errors and Web Vitals are reported through `lib/observability/report.ts` (plus Vercel Analytics in production)

## Deployment

1. Set `CONTACT_WEBHOOK_URL` in the host environment
2. Run `npm run verify`
3. Optionally run `npm run test:e2e` after a production build
4. Deploy with `npm run build` + `npm run start`, or a Next.js-compatible host (for example Vercel)

Rollback by redeploying the previous successful build artifact/commit.

## CI

GitHub Actions runs lint, typecheck, unit tests, production dependency audit, build, and Playwright smoke journeys.
