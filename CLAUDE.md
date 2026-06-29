# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Vite dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Serve the production build locally (alias: npm run serve)
npm run deploy:local # rsync the build into the sibling GitHub Pages repo (see Deployment)
```

There is no test runner, linter, or typecheck script configured. TypeScript is `strict` but used only for editor/IDE checking (`noEmit`) — Vite/esbuild transpiles without type-checking, so type errors do not fail the build. Run `npx tsc` manually if you need a type check.

## Architecture

This is a **purely client-side React SPA** — a personal developer portfolio. Despite the `package.json` name `rest-express` and a `@tanstack/react-query` dependency, there is **no backend, no API, and no server**. It was migrated from a Replit full-stack template (see commits "Remove Replit-specific configurations" / "Move client directory contents to root"); React Query is configured (`src/lib/queryClient.ts`, `staleTime: Infinity`) but unused for data fetching. All content is static.

### Routing — hash-based
Routing uses `wouter` with `useHashLocation` (`src/App.tsx`), so URLs look like `/#/projects`, `/#/projects/:slug`. This is deliberate for static/GitHub Pages hosting where there is no server to handle deep links. **In-page anchors and nav use the `/#section` form** (e.g. `window.location.href = "/#projects"`). When adding navigation, keep using hash links — plain `/path` links will break on the deployed static host.

### Page composition pattern
The home route (`src/pages/home.tsx`) is a single scrolling page that *composes the other page components as sections*: `Hero → Skills → ExperiencePage → Projects → Contact`. Those same components (`pages/experience.tsx`, `pages/projects.tsx`, `pages/contact.tsx`) are also reachable as standalone routes. Each section wraps itself in a `<section id="...">` so the navbar can target it.

`src/components/navigation.tsx` implements **scroll-spy**: on the home page it listens to scroll and highlights the active section; on other pages it derives the active section from the URL and uses `window.location.href = "/#section"` to jump back. `src/components/helpers/scroller.tsx` (`<ScrollToTop/>`) resets scroll on route change and is rendered by standalone pages.

### Content lives in data files and inline arrays
- `src/data/projects.ts` — project entries (extends the `Project` type with `longDescription`, `features`, `challenges`, `gallery`, `role`, `duration`). `project-preview.tsx` looks projects up by `slug` (falling back to numeric `id`).
- `src/data/tech-stack.ts` — `languages` / `tools` arrays for the Skills section. Icons are Font Awesome class strings (`fab fa-laravel`) or `imageIcon` URLs.
- `src/pages/experience.tsx` — the experience timeline is an **inline array inside the component**, not in `src/data/`.
- Shared shapes are in `src/lib/types.ts` (`Skill`, `Experience`, `Project`, `ContactInfo`).

To change portfolio content, edit these data sources rather than JSX.

### Styling & theming
- **shadcn/ui** ("new-york" style) primitives live in `src/components/ui/`. The generated kit was pruned to only what the app actually uses — `toast.tsx`, `toaster.tsx`, `tooltip.tsx` (wired up in `App.tsx`). `components.json` is still configured, so `npx shadcn@latest add <component>` can re-add others on demand. `cn()` helper in `src/lib/utils.ts`.
- The app's visual identity is a custom **"Material Ocean"** theme: HSL CSS variables defined in `src/index.css` (`--ocean-*`, `--laravel-red`), surfaced as Tailwind colors (`ocean-dark`, `ocean-primary`, etc.) in `tailwind.config.ts`.
- Custom component classes (`.btn-primary`, `.btn-secondary`, `.contact-input`, `.project-card`, `.nav-link`, `.animate-float`) are defined in `src/index.css` under `@layer components`/`@layer utilities`. Prefer these existing classes for consistency.
- **Font Awesome is loaded via CDN** in `index.html`, so app icons are used as `<i className="fas fa-...">` strings throughout. (`lucide-react` remains a dependency only because `ui/toast.tsx` uses its `X` icon.)

### Other notes
- `@` is aliased to `src/` (both `vite.config.ts` and `tsconfig.json`). A `@assets` alias points to a non-existent `attached_assets/` dir (Replit leftover).
- The Contact section (`src/pages/contact.tsx`) renders static contact info only — there is no contact form or submission backend.
- Project screenshots live in `public/images/` and are referenced by absolute path (`/images/...`).

## Deployment

Publishing involves **two repos** (the user works directly on `main` in both, solo):

- **Source** — this repo (`artfred16/ArtfredPortfolio`).
- **Live site** — the sibling GitHub Pages repo `../artfred16.github/` (`artfred16/artfred16.github.io`), served at https://artfred16.github.io/.

**Deploys are automated.** Pushing to `main` of this repo triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs `npm ci` + `npm run build` and publishes the built `dist/` into the Pages repo (replacing its content each time, so stale bundles are auto-cleaned). That push triggers the Pages repo's `static.yml`, which deploys to the live site. Normal flow: **just commit + push to `main`** — the site updates in ~1–2 min. CI auth is an SSH deploy key on `artfred16.github.io` whose private key is the `PAGES_DEPLOY_KEY` secret here.

`npm run deploy:local` (`rsync -a dist/* ../artfred16.github/`) is the **manual fallback** only. Don't hand-edit `../artfred16.github/` — CI owns it; `git pull` it first if you must.

**For the CI pipeline details, verification commands, and the manual fallback, use the [`/deploy` skill](.claude/skills/deploy/SKILL.md).**
