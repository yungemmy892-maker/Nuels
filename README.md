# Emmanuel Okon — Portfolio (v2)

Rebuilt with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui-style
primitives, and Framer Motion. Dark, terminal-inspired design — JetBrains Mono
throughout, content framed as terminal panes (`cat about.md`, `ls ./projects`,
`cat stack.json`, etc.).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy

Push to a GitHub repo and import it on [Vercel](https://vercel.com/new) — no
config needed, it's a standard Next.js app. `next.config.mjs` already sets
`images.unoptimized: true` so it also works on any static/Node host, not just
Vercel's image pipeline.

## Structure

- `app/` — root layout, global styles, the single page (`app/page.tsx`)
- `components/sections/` — one file per section (nav, hero, about, experience,
  projects, skills, contact, status-bar)
- `components/ui/` — shadcn-style primitives (button, badge, separator)
- `lib/data.ts` — all content: projects, work experience, skills, social
  links, EmailJS config. Edit this file to update copy without touching JSX.
- `public/` — resume.pdf, profile.jpg, favicon, robots.txt

## Editing content

Almost everything you'd want to change day-to-day lives in `lib/data.ts`:
project list, job history, skill groups, and social links are all plain
arrays there. Section copy (hero tagline, about paragraphs) lives inline in
each `components/sections/*.tsx` file.

## Notes

- The contact form posts directly to the EmailJS REST API using the same
  service/template/public key as the previous SvelteKit site — no backend
  needed.
- Font is self-hosted via `@fontsource/jetbrains-mono` (not `next/font/google`)
  so the build doesn't depend on reaching Google Fonts at build time.
- `resume.pdf` in `public/` is the updated resume (includes the UptownLogs
  project). Replace it directly to update the downloadable file.
