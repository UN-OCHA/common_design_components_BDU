# OCHA Common Design System — instructions for Claude

This repo is the OCHA Common Design System (`cd-*` components + Storybook) **and** its
app-facing layer, the **App Kit** (`app-kit/`), which real OCHA web apps & tools consume.

## ▶ If asked "what's pending?" / about handoffs / DS updates — check this first
Run **`python3 app-kit/handoffs.py list`** (or read **`app-kit/HANDOFFS.md`**) — the
ledger of kit changes waiting on a Claude session (this Design System session, or a
token-only app's session). Report the open items. When you finish one here (e.g. document
a component in Storybook), run **`python3 app-kit/handoffs.py done h<N>`** to close it.
`app-kit/sync.py` also prints the open items on every run.

## The App Kit (`app-kit/`)
`app-kit/ocha-app-kit.css` is the practical, app-facing layer of this design system —
the source of truth for the look & feel of OCHA web **apps & tools** (not websites).
Apps consume it via `app-kit/sync.py` + `app-kit/apps.json`; it grows from real apps.
Read **`app-kit/CLAUDE.md`** for the full discipline (change components in the kit → sync →
log `CHANGELOG.md` → add a `HANDOFFS.md` line for anything the DS Storybook or a token-only
app must mirror).

When an app-kit change adds or changes a shared component, **mirror it into the Storybook /
`cd-*` docs here** so the documented system and the app layer stay in step. `CHANGELOG.md`
says what changed and why; `HANDOFFS.md` says what still needs doing here.

## Cross-session note
All these sessions run on the same machine (Dropbox), so `app-kit/HANDOFFS.md` is shared
live — no git pull needed between local sessions. Commit/push only to reach GitHub or other
machines.
