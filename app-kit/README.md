# OCHA App Kit

The **practical, app-facing layer** of the OCHA Common Design System — the tokens
and flat components you actually build BDU web apps with. One file is the source
of truth; every app consumes a copy of it. **It's a living design system: it grows
from real apps, and changes here propagate everywhere.**

```
app-kit/
├── ocha-app-kit.css   ← SOURCE OF TRUTH — tokens + components. Edit only here.
├── apps.json          ← registry of apps that consume the kit
├── sync.py            ← pushes the kit into every registered app
├── CHANGELOG.md       ← what changed, and why (from which app)
└── README.md          ← this file
```

## The rule (this is what keeps it alive)

**Never style a component inside an app.** Colors, buttons, cards, inputs, tabs,
headers — all come from the kit. An app's own CSS is *layout only*.

- Don't like how a component looks/works in a real app? **Change it in
  `ocha-app-kit.css`, then run `sync.py`** — every app updates.
- Need a component that doesn't exist? If nothing here fits, **add it to the kit
  first**, then use it — so the next app inherits it.

That's the point: the design system improves *because* real apps push on it,
instead of being a style guide nobody applies.

## Propagate a change

```bash
cd app-kit
python3 sync.py          # push the kit to every app in apps.json
python3 sync.py --check  # preview what would change, write nothing
```

- `file` apps (served static CSS, e.g. QuickVid): the whole kit is copied to their
  `ocha-app-kit.css`.
- `inline` apps (self-contained single HTML, e.g. the photo tool): the kit — or
  just its `:root` tokens (`"scope": "tokens"`) — replaces the text between the
  app's `/* OCHA-KIT:START */ … /* OCHA-KIT:END */` markers.

Log every change in `CHANGELOG.md`.

## Start a new OCHA app

1. Add a `<link rel="stylesheet" href="…/ocha-app-kit.css">` (or copy it in) + load
   **Roboto**.
2. Register the app in `apps.json`, run `sync.py`.
3. Build with the kit's classes (`.cd-card`, `.cd-button`, `.cd-block-title`,
   `.cd-form__input`, `.mode-tab`, …). Your app CSS handles layout only.

## Tokens (short names — use these when building)

`--ocha-cyan` #009EDB · `--ocha-blue` #0077B8 · `--ocha-blue-dark` #004987 ·
`--ink` · `--muted` · `--line` · `--input-border` · `--bg` · `--card` ·
`--ok` / `--warn` / `--err` · `--radius` / `--radius-sm` / `--radius-pill`.

They're the OCHA CDS ramp with app-friendly names. The full canonical `--cd-*`
ramp lives in `../tokens/brand.css`; this kit is the subset apps build from.
