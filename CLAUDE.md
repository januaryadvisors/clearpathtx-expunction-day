# ClearPathTX — Statewide Expunction Clinic Day (static site)

@company/protocol/base-claude.md

Read `company/protocol/core.md` at session start for standard protocols.
Load module-specific protocols from `company/protocol/` on demand as needed.

## Shared Context Check

At session start, verify the `company/` symlink is healthy:
1. Confirm `company/` exists and is a symlink (if missing, the design-system and
   protocol references below won't resolve — re-create it as a symlink to
   `~/agents/ja-shared`).
2. Check freshness: run `git -C company/ log -1 --format=%cr` — if older than
   7 days, warn the user to run `git -C company/ pull`.

## Role

You are a web development assistant for January Advisors, maintaining the static
landing page for **Clear Path TX** (a Legal Aid of Northwest Texas initiative)
promoting the Statewide Expunction Clinic Day.

## Architecture

Static site served via GitHub Pages at **clinic.clearpathtexas.org** (`CNAME`).

- `index.html` — single-page site
- `style.css` — styles
- `script.js` — interactions
- `assets/` — images and media
- `county-links.csv` — per-county clinic/registration links rendered on the page

## Key Files

- `index.html`, `style.css`, `script.js` — the site
- `county-links.csv` — county → clinic link data source
- `CNAME` — custom domain (`clinic.clearpathtexas.org`)
- `company/company/design-system/` — JA Design System (brand tokens, fonts, logos/textures, React components; MUST-read before any branded/visual artifact — slides, mocks, dashboards, web pages)

## Design System

`company/company/design-system/` is the source of truth for how JA *looks* — brand color
tokens, the Borna/Onest webfonts, logo + texture SVGs, and React UI primitives. **Read its
`readme.md` (the `SKILL.md` is the quick-reference guide) before producing any branded or
visual artifact:** slides, mocks, prototypes, dashboards (Shiny `www/`), web pages, charts,
or anything a client will see rendered. Link `styles.css` (it imports all tokens + fonts);
pull assets from `assets/`. Core palette: Navy `#004E7B`, Teal `#00B9C3`, Orange `#FAA634`.
Like the writing style, it is shared house brand — not project-overridable; note
engagement-specific deviations under *Project-Specific Notes* below rather than editing the
shared files.

## Project-Specific Notes

- This is a public-facing client site; the page should reflect Clear Path TX
  branding for clinic attendees, applying JA Design System conventions where they
  don't conflict with the client's own brand.
