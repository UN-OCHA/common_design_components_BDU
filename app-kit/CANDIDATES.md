# Kit candidates — patterns from apps, not yet promoted

Real components that emerged while building an app and *might* belong in the
shared kit. Keep them in the app's own layout CSS until a **second** app needs
one (or it's clearly generic) — then promote to `ocha-app-kit.css`, log it in
`CHANGELOG.md`, and `sync`. This file is the "living design system" queue: the
place where practice proposes new shared components.

## Selectable option card — from QuickVid › Titles & branding › Ending
Radio-backed card: example image + bold label + hint, cyan ring when checked,
keyboard-focusable. Lives as `.end-opt` in
`ocha_quick_vid/app/web/style.css`. Generic enough for any "pick one of N
visual options" (format pickers, template pickers, style pickers).
→ Promote as `cd-option-card` when a 2nd app needs it.

## Column-label row for repeatable input rows — from QuickVid › lower thirds
A header row of small uppercase labels that lines up over a repeating flex
input row (`.lt-labels` + `.lt-row`, same file). Useful anywhere users fill a
table-like list of short fields.
→ Promote if reused.
