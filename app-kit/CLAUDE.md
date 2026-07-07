# App Kit — instructions for Claude

This folder is the **source of truth** for the look & feel of OCHA BDU web apps.
`ocha-app-kit.css` is consumed by every app in `apps.json`. Read `README.md`.

## The discipline (this is the whole point)

The OCHA design system must stay **alive** — grown from real apps, not an isolated
style guide. So:

1. **All shared styling lives here, never in an app.** Tokens, buttons, cards,
   inputs, tabs, headers, alerts. An app's own CSS is layout only.
2. **When an app needs a component changed** (a button feels wrong in real use, a
   card's spacing is off): edit `ocha-app-kit.css` — **not the app** — then sync.
3. **When an app needs a new component:** if nothing existing fits, add it to the
   kit first (kit-first), then use it in the app, so the next app inherits it.
4. **After any kit change, always:**
   ```bash
   cd app-kit && python3 sync.py          # push to every registered app
   ```
   and add a one-line entry to `CHANGELOG.md` (what changed + which app prompted it).
5. **Registering a new app:** add it to `apps.json` (`file` for served-CSS apps,
   `inline` for self-contained single-HTML apps) and run `sync.py`.

## Handoffs to other sessions (so the reminder never gets lost)

`sync.py` reaches **full-kit apps** automatically. It cannot reach the **DS Storybook**
or **token-only apps** (e.g. Photo Metadata) — those are separate Claude sessions with
no shared memory. So when a kit change needs one of them:

1. Add a `- [ ]` line to **`HANDOFFS.md`** (which session · what to do).
2. `sync.py` prints the open handoffs on every run — **relay them to Javier**, and
   **remind him to prompt his Design System session** to mirror the change in Storybook.
3. When a session finishes its item, it checks it `- [x]` and moves it to **Done**.

The cross-session bridge is: shared repo (`HANDOFFS.md` + `CHANGELOG.md` + `apps.json`)
+ the human prompting the right session. There is no automatic sync between sessions.

## Conventions
- **Token names**: short, app-facing (`--ocha-cyan`, `--ink`, `--line`, `--radius`…).
  Values are the CDS ramp (`../tokens/brand.css` is the canonical `--cd-*` source).
- **Component classes**: `cd-*` (aligned to the CDS), e.g. `.cd-card`, `.cd-button`,
  `.cd-block-title`, `.cd-form__input`. Reuse before inventing.
- **Flat**: no drop shadows. WCAG-AA text colors (`--ocha-blue` for blue text on white).

If you're a Claude session working in an *app* (QuickVid, photo tool…): its own
`CLAUDE.md` points back here. Don't restyle components in the app — change them here.
