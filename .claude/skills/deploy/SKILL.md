---
name: deploy
description: Build, deploy, and publish the Artfred portfolio — covers the source repo (ArtfredPortfolio) AND the GitHub Pages live site (artfred16.github.io). Use when asked to deploy/publish the site, push changes live, ship the portfolio, or commit & push the source. Knows the build → deploy:local → commit/push flow and the stale-bundle pitfalls.
---

# Deploy the Artfred portfolio

There are **two separate git repos**. A full publish touches both:

| Role | Path | Remote | Branch |
| --- | --- | --- | --- |
| **Source** (React/Vite) | `.` (this repo) | `artfred16/ArtfredPortfolio` | `main` |
| **Live site** (GitHub Pages) | `../artfred16.github/` | `artfred16/artfred16.github.io` | `main` |

- `npm run build` outputs to `dist/` (`assets/`, `images/`, `index.html`) — Vite has `emptyOutDir: true`, so `dist/` is wiped and regenerated each build.
- `npm run deploy:local` = `rsync -a dist/* ../artfred16.github/` — copies the build into the Pages repo. The Pages repo, once committed + pushed, publishes to **https://artfred16.github.io/**.
- The user works **directly on `main`** in both repos (solo). Don't open PRs/branches unless asked.
- There are no test/lint scripts. Typecheck with `npx tsc --noEmit` (the build does NOT typecheck).

## Full publish — ordered steps

```bash
# 0. From the source repo root
cd /Users/artfred16/code/artfred-portfolio

# 1. Typecheck + fresh build
npx tsc --noEmit            # must be clean
npm run build               # -> dist/

# 2. Deploy build into the Pages repo (additive rsync)
npm run deploy:local
```

```bash
# 3. Publish the LIVE SITE (Pages repo)
cd ../artfred16.github

# 3a. Verify integrity: every asset index.html references must exist locally
for a in $(grep -oE '/assets/[^"]+' index.html); do
  [ -f ".${a}" ] && echo "ok  $a" || echo "MISSING $a"
done

# 3b. (Optional but recommended) prune stale hashed bundles so the repo stays lean.
#     rsync is additive, so old index-<hash>.js/.css pile up in assets/.
keep=$(grep -oE 'index-[A-Za-z0-9_-]+\.(js|css)' index.html | sort -u)
for f in assets/index-*.js assets/index-*.css; do
  base=$(basename "$f")
  echo "$keep" | grep -q "$base" || { git rm -q "$f" 2>/dev/null || rm -f "$f"; }
done

# 3c. Stage a CLEAN set: index.html + referenced bundles + any new images.
#     Do NOT commit .DS_Store or orphaned bundles.
git add index.html
for a in $(grep -oE '/assets/[^"]+' index.html); do git add "assets/$(basename "$a")"; done
git add images/
git status -s | grep -v '\.DS_Store'   # review — should be only the intended files

git commit -m "Publish site update: <short summary>

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
git push origin main

# 3d. Confirm it went live (live HTML is the source of truth; the
#     pages/builds API can show a stale legacy record — ignore it)
curl -s "https://artfred16.github.io/?cb=$(date +%s)" | grep -oE '/assets/index-[^"]+'
# ^ should print the same bundles index.html references
```

```bash
# 4. Commit + push the SOURCE repo
cd /Users/artfred16/code/artfred-portfolio
git add -A                              # .idea/ is gitignored; dist/ is gitignored
git status -s
git commit -m "<summary of source changes>

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
git push origin main

# verify sync (both repos)
git ls-remote origin -h refs/heads/main
git rev-list --left-right --count origin/main...main   # want: 0   0
```

## Scope it to the request

- "deploy local" / "deploy the site" → steps 1–2 only (build + rsync). Leaves the Pages repo staged but unpushed for review. Report the live URL won't change until pushed.
- "commit and push" / "publish" → which repo? Ask if ambiguous. "the live site" = Pages repo (step 3); "this project"/"the source" = source repo (step 4); "everything" = both.
- A real publish that should appear on the web = steps 1→4.

## Pitfalls (learned the hard way)

- **Never use `rsync --delete` against `../artfred16.github/`** — it would wipe the Pages repo's `.git/` and `.github/`. The additive deploy is deliberate; prune stale bundles via git instead (step 3b).
- **Orphaned hashed bundles**: content-hashed `index-<hash>.js/css` accumulate across deploys. Always stage only the bundles `index.html` references (step 3c) and prune the rest (3b), or the repo bloats and stray bundles get committed.
- **`.DS_Store`**: don't commit it in either repo. (Source repo gitignores it; Pages repo does not.)
- **`deploy:local` source path**: it must be `dist/*` (the build output is `dist/`, not `dist/public/*` — the latter was a stale leftover from the old full-stack template). If the build `outDir` ever changes, update the script in `package.json`.
- **Protected ref on push**: pushing the source repo may print `Cannot update this protected ref`; the push still succeeds via admin access. Verify with `git rev-list --left-right --count origin/main...main` (expect `0 0`).
- **Pages build API lag**: `gh api repos/artfred16/artfred16.github.io/pages/builds/latest` can return an old build record. Trust the live HTML (step 3d), not that endpoint.
