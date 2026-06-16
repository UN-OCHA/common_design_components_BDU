# OCHA Design System — Common Design

The official design system for the United Nations Office for the Coordination of Humanitarian Affairs (OCHA). Built on the **Common Design** (`cd-*`) component library, updated to the current UN/OCHA visual identity.

**▶ Live: [un-ocha.github.io/ocha-common-design-system-BDU](https://un-ocha.github.io/ocha-common-design-system-BDU/)**

> ⚠️ **Beta — under active development.** Contents and structure may change. Feedback to [ochavisual@un.org](mailto:ochavisual@un.org).

---

## What's inside

| Section | What it covers |
| --- | --- |
| **Foundations** | Colours, Typography, Spacing & layout, Logo, Iconography, Data visualization (12 chart-type specs) |
| **Components** | 49 framework-agnostic `cd-*` components — buttons, alerts, cards, forms, navigation, tables, and more |
| **Patterns** | Composite layouts — dashboard shell, report page, data-viz container |
| **Building with AI** | A drop-in rules file so Copilot / Claude / ChatGPT respect the OCHA design system |
| **Resources** | Logos, the AI rules file, icon libraries, brand portal, tooling |

## Quick start

Every component is plain HTML + CSS — no framework required. Drop the token file into your project and use the `cd-*` classes:

```html
<link rel="stylesheet" href="tokens/brand.css">

<button class="cd-button">
  <span class="cd-button__text">Submit</span>
</button>
```

The token system has two layers: raw palette values (`--cd-*`) and semantic aliases (`--brand-*`). **Components consume only `--brand-*`** — to retheme, override that layer in one place. See [`tokens/brand.css`](tokens/brand.css).

### Icons

- **UI chrome** (buttons, nav, toolbars) → **Font Awesome** (OCHA Pro kit, or the free tier).
- **Content & pictograms** (KPIs, charts, reports) → **[OCHA Humanitarian Icons](https://github.com/UN-OCHA/humanitarian-icons-2026-BDU)**.

The rule: *is the user reading the icon, or acting on it?* See **Foundations → Iconography** in the live site.

## Local development

```bash
npm install
npm run storybook        # dev server at http://localhost:6006
npm run build-storybook  # static build → storybook-static/
```

Pushing to `main` auto-deploys to GitHub Pages via [`.github/workflows`](.github/workflows).

## Structure

```
.storybook/      Storybook config, manager + preview theming
components/       49 cd-* components (one folder each: .css + .stories.js)
docs/            MDX docs — Welcome, Foundations, Patterns, Building with AI, Resources
tokens/          brand.css — the single source of truth for colours, type, spacing
public/          logos, favicon, the cd-icons legacy sprite
OCHA_DESIGN_SYSTEM_RULES.md   The AI rules file (mirrored on the Building with AI page)
```

## Contributing

This is an OCHA BDU project. To propose a component, token change, or fix:

1. Open an issue describing the need (with a screenshot or example where possible).
2. For code, branch from `main` and open a PR — keep components framework-agnostic, use `--brand-*` tokens (never raw hex), and meet **WCAG 2.1 AA**.
3. BDU reviews for brand and accessibility consistency before merge.

## Project Owner

Javier Cueto — Lead, Brand and Design Unit (BDU), OCHA

## Maintained by

**OCHA Brand and Design Unit (BDU)**
- Team: [ochavisual@un.org](mailto:ochavisual@un.org)
- Focal point: Javier Cueto ([cuetoj@un.org](mailto:cuetoj@un.org))
- Brand portal: [brand.unocha.org](https://brand.unocha.org)

## License

GPL-2.0-or-later. Common Design is an OCHA open-source project.
