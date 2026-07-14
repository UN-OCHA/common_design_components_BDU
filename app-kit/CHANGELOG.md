# OCHA App Kit — changelog

Every kit change goes here: what changed, and which real app prompted it. This is
the record of the design system growing from practice.

## 2026-07-14 - v0.1.5 - alert: drop the box-shadow accent bar too
Same-day follow-up to v0.1.4, prompted by **OCHA QuickVid** (Javier, after seeing
v0.1.4 live: "remove the left thicker border... this should affect all cd-alert").
v0.1.4's box-shadow accent bar was a faithful match of the DS repo's own
`components/cd-alert/cd-alert.css` at the time — but it still read as a chunky
left bar, so **the box-shadow was removed from the canonical DS source itself**
(not just the app-kit), and the app-kit's `.cd-alert` mirrors that. `.cd-alert`
is now a plain 1px border all around + the ramp-step-6 tint, nothing on the left
edge. Everything else from v0.1.4 (baked-in margin, flow-spacing fix) is unchanged.

## 2026-07-14 - v0.1.4 - alert matches the real DS component + flow-spacing fix
Prompted by **OCHA QuickVid** (Javier: "use the alerts from OCHA DS, not the ones
with the left border — that's so AI made").
- **`.cd-alert`** now matches `components/cd-alert` in the main DS repo: full
  1px border + an offset `box-shadow` accent bar (not `border-left`), and the
  ramp-step-6 tint backgrounds the DS actually uses (`--_ab` per variant:
  `#E3EDF6`/`#CEE3A0`/`#FEDCBD`/`#F9C0C5`) instead of the near-white washes the
  kit had drifted to. The old border-left + pale-tint combo is a very common
  generic-template look; this is the branded original.
- Bakes in its own `margin: 1rem 0` (the DS component does too), zeroed at
  `:first-child`/`:last-child` — an alert no longer needs a parent-side margin
  hack to get breathing room. Apps that want it tighter still can (QuickVid's
  `.status-slot .cd-alert` already overrides to `0.15rem`, unchanged).
- **Root-caused a real spacing bug**, not just this one spot: `.cd-block-title`
  sets `margin: 0`, which — same specificity, later in the file — was silently
  cancelling `.cd-flow > * + *`'s top margin whenever a block-title directly
  followed a flow sibling (e.g. an alert sitting right above a card heading).
  Added `.cd-flow > * + .cd-block-title` (two classes, wins the tie regardless
  of file order) so flow spacing always applies there. Fixes it everywhere this
  pattern occurs, not only in QuickVid's engine-update alert.

## 2026-07-13 - v0.1.3 - progress bar
Prompted by **OCHA QuickVid** (download / transcribe % progress bars).
- New component: **`.cd-progress`** + `.cd-progress__fill` (+ optional
  `.cd-progress__pct`) - a thin cyan-fill bar; set the fill `width` %.

## 2026-07-12 — v0.1.2 · modal component
Prompted by **OCHA QuickVid** ("Use AI" sentence-selection dialog).
- New component: **`.cd-modal`** — overlay + panel (cyan top bar, rounded card,
  close ×). Toggle with `[hidden]`; the app wires close/overlay clicks.

## 2026-07-10 — v0.1.1 · step-help component + registry fix
Prompted by **OCHA QuickVid** (colleague user-testing: every wizard step needs a
plain-language explainer).
- New component: **`.cd-help__btn` / `.cd-help__panel`** — a round `?` button in a
  step title toggling an explainer panel (cyan-tinted card, readable inside
  uppercase titles). Markup + 3-line delegated toggle documented in the kit CSS.
- **apps.json fix:** QuickVid target moved `app/web/vendor/` → `browser/vendor/`
  (the unified UI moved; syncs were hitting the retired copy).

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
