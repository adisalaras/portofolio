# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page personal portfolio for Adisa Laras Pertiwi. React 18 + Vite SPA in plain JavaScript (JSX) — **no TypeScript**. `src/App.jsx` composes section components from `src/components/` (Navbar, Hero, About, Projects, Certificates, Contact, Footer, plus a custom Cursor).

## Commands

- `npm run dev` — Vite dev server (http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npx prettier --write <file>` — format a file (Prettier is the formatter; runs automatically on edit via hook)

## Styling conventions

- **Vanilla CSS only** — no Tailwind, CSS modules, or styled-components.
- Global styles, CSS custom properties, and `@keyframes` live in `src/index.css`. Theme colors are CSS variables on `:root` (navy `#090C18`, red accent `#E83E4A`, off-white `#F4F2ED`).
- Component-level styling is done with **inline `style={}` objects**, not CSS classes. Match this pattern when editing components.
- Animations are predefined keyframes in `index.css` (fadeUp, fadeIn, slideRight, float, pulse-ring, blink, marquee) — reuse these rather than adding new ones ad hoc.

## Deployment

Manual deploy to shared hosting: run `npm run build`, then upload the **contents of `dist/`** to the host's web root. There is no CI/CD. Use `/deploy-prep` to build and get the upload checklist.

## Gotchas

- **Static assets need a `public/` dir.** Vite serves `public/` at `/`. Hero.jsx links the CV at `/CV_-_Adisa_Laras_Pertiwi__3_.pdf`, but no `public/` directory exists yet — that download is currently broken. Put root-served files (CV PDF, favicons) in `public/`.
- No linting and no tests are configured. Verify changes by running `npm run dev` and checking the browser.
