---
name: deploy
description: Build, deploy, and publish the Artfred portfolio. Deploys are AUTOMATED via CI (push to main of ArtfredPortfolio → build → publish to artfred16.github.io). Use when asked to deploy/publish the site, ship the portfolio, verify a deploy, or run the manual fallback. Covers the source repo (ArtfredPortfolio), the live Pages site (artfred16.github.io), the CI pipeline, and pitfalls.
---

# Deploy the Artfred portfolio

## Deploys are automated via CI — usually you do nothing

Pushing to **`main` of the source repo** (`artfred16/ArtfredPortfolio`) triggers
[`.github/workflows/deploy.yml`](../../../.github/workflows/deploy.yml), which:

1. `npm ci` + `npm run build` (Node 22) → `dist/`
2. clones `artfred16.github.io`, **replaces its content with the fresh `dist/`** (keeping its `.git` and `.github/`, which clears stale bundles), commits, and pushes to that repo's `main`
3. that push triggers the Pages repo's own `static.yml`, which deploys to **https://artfred16.github.io/**

So the normal flow is just: **commit + push source changes to `main`** → the live site updates in ~1–2 min. No local build/rsync needed.

**Infra already in place (don't recreate):**
- Write **SSH deploy key** on `artfred16.github.io` titled `ArtfredPortfolio CI deploy`.
- Its private key is the secret **`PAGES_DEPLOY_KEY`** in `ArtfredPortfolio`.
- CI cleans stale content-hashed bundles automatically (step 2 replaces, doesn't append).

### Verify a deploy

```bash
# source-repo build+push run
gh run list --repo artfred16/ArtfredPortfolio --limit 3
# Pages deploy run (triggered by CI's push to the Pages repo)
gh run list --repo artfred16/artfred16.github.io --limit 3
# live site references the expected bundle
curl -s "https://artfred16.github.io/?cb=$(date +%s)" | grep -oE '/assets/index-[^"]+'
```

## The two repos

| Role | Path | Remote | Branch |
| --- | --- | --- | --- |
| **Source** (React/Vite) | `.` (this repo) | `artfred16/ArtfredPortfolio` | `main` |
| **Live site** (GitHub Pages) | `../artfred16.github/` | `artfred16/artfred16.github.io` | `main` |

`main` of `ArtfredPortfolio` is protected by the `restrict main` ruleset (only admin can push; admin bypass). `artfred16.github.io`'s `main` is written by CI — **don't hand-edit it**; if you must, `git -C ../artfred16.github pull` first, since CI pushes to it.

## Manual fallback (`npm run deploy:local`)

Use only if CI is broken. From the source repo root:

```bash
npx tsc --noEmit && npm run build          # -> dist/
git -C ../artfred16.github pull --ff-only   # CI may be ahead; sync first
npm run deploy:local                        # rsync -a dist/* ../artfred16.github/
cd ../artfred16.github
# stage ONLY index.html + referenced bundles + new images; prune orphans; skip .DS_Store
git add index.html; for a in $(grep -oE '/assets/[^"]+' index.html); do git add "assets/$(basename "$a")"; done
git add images/
git status -s | grep -v '\.DS_Store'        # review
git commit -m "Manual deploy" && git push origin main   # triggers static.yml -> Pages
```

## Pitfalls

- **Don't hand-edit `artfred16.github.io`** — CI owns it and force-replaces content each deploy. Pull before any manual push.
- **`rsync --delete` is never used** against the Pages repo (it would wipe `.git`/`.github`); CI instead does a `find ... -exec rm` that preserves `.git` and `.github/`. Stale bundles are handled there.
- **`deploy:local` source path** must be `dist/*` (the build output is `dist/`). If the build `outDir` changes, update the script in `package.json` AND the `cp -R dist/.` step in the workflow.
- **Pages build API lag**: `gh api .../pages/builds/latest` can return a stale record — trust the live HTML / the `gh run list` status instead.
- **Protected-ref message** when pushing source: benign (admin bypass); verify with `git rev-list --left-right --count origin/main...main` (expect `0 0`).
