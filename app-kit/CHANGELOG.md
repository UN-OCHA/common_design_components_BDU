# OCHA App Kit — changelog

Every kit change goes here: what changed, and which real app prompted it. This is
the record of the design system growing from practice.

## 2026-07-05 — v0.1.0 · initial kit
Extracted from **OCHA QuickVid** after it was aligned to the **Photos metadata
tool** look. First shared foundation.
- Tokens: `--ocha-cyan/-blue/-blue-dark`, `--ink/--muted/--line/--input-border/--bg/--card`, `--ok/--warn/--err`, radii, fonts.
- Signature: 8px cyan top bar, Roboto, flat (no shadows).
- Components: app shell (header/main/footer/lede/hint), page + uppercase section
  titles with step badge, card (10px, hairline), buttons (+outline/small/export),
  form inputs/labels, tabs, video player (+fit), status/alert.
- Registered apps: QuickVid (file), Photo Metadata (inline, tokens-only).
- Added `:root { color-scheme: light; }` — OCHA apps are light-themed; opt out of
  browser auto-dark. (Found while wiring QuickVid: a dark-mode browser was
  neutralising the light background — exactly the kind of real-world fix the kit
  should carry for every app.)
- `.mode-tab` is now `inline-flex` with a gap, and gains `.mode-tab__icon`
  (0.95em, `currentColor`) — tabs can carry a leading UI icon. Prompted by
  QuickVid adding Font Awesome icons to its tabs, per DS Foundations → Iconography
  (UI chrome = Font Awesome; content = OCHA Humanitarian Icons).
- **Standard app header adopted** (`.app-header` + `__logo`/`__titles`/`__title`/`__subtitle`),
  taken from the **Photo Metadata tool** as the standard for OCHA web apps & tools
  (not websites): full-width white bar, logo · divider · title/subtitle. One deliberate
  change from the source: the tool **title is `--ink` (black), not blue**. Replaces the
  old centred `.app-header__inner`/`__product`/`__name`/`__tag`.
  → **Design System session:** document this header in Storybook as the app/tool standard.
  → **Photo Metadata session:** change `header h1` colour from `--ocha-blue-dark` to `--ink`.
- **Favicon** — canonical `app-kit/favicon.svg` (OCHA/UN emblem, cyan) added; every app
  ships it and links it (`<link rel="icon" type="image/svg+xml">`).
  → **Photo Metadata session:** add the favicon + link tag.
