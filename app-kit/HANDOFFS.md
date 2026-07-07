# Kit handoffs — changes waiting on another Claude session

`sync.py` pushes the kit to full-kit apps automatically. Two things it **can't**
auto-do, because separate Claude sessions don't share memory:

- **document a new/changed component in the DS Storybook** → **Design System session**
- **update a token-only app** (e.g. Photo Metadata, which inlines only tokens) → **that app's session**

**Workflow:** when a kit change needs one of those, add a `- [ ]` line under **Open**.
Check it `- [x]` (and move it to **Done**) once that session has done it. `sync.py`
prints the open items on every run, and the app-side session surfaces them to Javier —
so the reminder to *prompt the Design System session* can't get lost.

## Open
- [ ] **Design System (Storybook):** document `.mode-tab` icon support (the "Font Awesome for UI, Humanitarian icons for content" convention itself is already documented in Foundations → Iconography). — 2026-07-05
- [ ] **Photo Metadata session:** change `header h1` colour `--ocha-blue-dark` → `--ink`; add `favicon.svg` + `<link rel="icon">`. — 2026-07-05

## Done
<!-- move checked items here, newest first -->
- [x] **Design System (Storybook):** document the standard `.app-header` (`__logo`/`__titles`/`__title`/`__subtitle`) — the Photo-tool header standardized for apps/tools, title `--ink` not blue. — 2026-07-05 · done 2026-07-07 (Composites → App header story: mirrors app-kit CSS, token mapping, website-header cross-link)
