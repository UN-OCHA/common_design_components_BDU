# Kit handoffs — changes waiting on another Claude session

`sync.py` pushes the kit to full-kit apps automatically. Two things it **can't**
auto-do, because separate Claude sessions don't share memory:

- **document a new/changed component in the DS Storybook** → **Design System session**
- **update a token-only app** (e.g. Photo Metadata, which inlines only tokens) → **that app's session**

**Manage this ledger with `handoffs.py`** — the only writer, so the format can't drift:
`handoffs.py add "**…session:** …"` · `handoffs.py done h3` · `handoffs.py list`.
Reading this file directly is always fine. `sync.py` also prints the open items on every
run and the app-side session surfaces them to Javier — so the reminder to *prompt the
Design System session* can't get lost. (Ids `hN` are stable — preserved through done/reopen.)

## Open
- [ ] `h3` **Photo Metadata session:** change `header h1` colour `--ocha-blue-dark` → `--ink`; add `favicon.svg` + `<link rel="icon">`. — 2026-07-05

## Done
<!-- managed by handoffs.py — newest first -->
- [x] `h7` **Design System (Storybook):** the app-kit's `.cd-alert` (v0.1.5) now matches `components/cd-alert` exactly — the box-shadow accent bar was REMOVED from the canonical DS source itself (Javier: 'so AI made', wanted the thick left border gone), so both now render a plain 1px border all around, ramp-step-6 tints, no left/offset bar. Confirm Storybook's cd-alert story picks this up automatically (it imports the same cd-alert.css) — if a built storybook-static snapshot is stale, rebuild it. — 2026-07-14 · done 2026-07-14
- [x] `h6` **Design System (Storybook):** document the new `.cd-progress` bar component (kit v0.1.3) - track + cyan fill (set width %) + optional __pct label. — 2026-07-13 · done 2026-07-14
- [x] `h5` **Design System (Storybook):** document the new `.cd-modal` component (kit v0.1.2) — overlay + panel with cyan top bar and close button; toggled via [hidden]. — 2026-07-12 · done 2026-07-14
- [x] `h4` **Design System (Storybook):** document the new `.cd-help__btn`/`.cd-help__panel` step-help component (v0.1.1) — round ? button in a step title toggling a plain-language explainer panel; include the 3-line delegated toggle JS from the kit CSS comment. — 2026-07-10 · done 2026-07-14
- [x] `h2` **Design System (Storybook):** document `.mode-tab` icon support (the "Font Awesome for UI, Humanitarian icons for content" convention itself is already documented in Foundations → Iconography). — 2026-07-05 · done 2026-07-14
- [x] `h1` **Design System (Storybook):** document the standard `.app-header` (`__logo`/`__titles`/`__title`/`__subtitle`) — the Photo-tool header standardized for apps/tools, title `--ink` not blue. — 2026-07-05 · done 2026-07-07 (Composites → App header story: mirrors app-kit CSS, token mapping, website-header cross-link)
