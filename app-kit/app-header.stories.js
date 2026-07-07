/**
 * OCHA App Header — the standard header for OCHA web apps & tools.
 *
 * Canonical CSS: app-kit/ocha-app-kit.css  (.app-header + __logo/__titles/__title/__subtitle).
 * This story MIRRORS those rules — scoped under `.appkit-frame` so it can't bleed into
 * other stories (the kit sets them on `body`, which we must not do inside Storybook).
 * Edit the KIT, never here — then run app-kit/sync.py. See app-kit/CLAUDE.md.
 */

const STYLES = `
<style>
  /* Mirror of app-kit/ocha-app-kit.css .app-header — scoped to this demo frame.
     Values reference the Common Design tokens (tokens/brand.css) where they map. */
  .appkit-frame {
    border-top: 8px solid var(--brand-primary);   /* --ocha-cyan #009EDB — OCHA signature rule */
    background: var(--cd-grey--300);                /* --bg #F2F2F2 — app surface */
    font-family: var(--brand-font);
    color: var(--cd-grey--800);                     /* --ink #4D4D4D */
  }
  .appkit-frame .app-header {
    display: flex; align-items: center; gap: 16px;
    padding: 16px 24px;
    background: var(--cd-white);                     /* --card #FFFFFF */
    border-bottom: 1px solid #E2E5E8;               /* --line (app-kit hairline) */
  }
  .appkit-frame .app-header__logo { height: 38px; width: auto; display: block; }
  .appkit-frame .app-header__titles {
    border-inline-start: 1px solid #E2E5E8;         /* --line divider */
    padding-inline-start: 16px;
  }
  .appkit-frame .app-header__title {
    margin: 0; font-size: 18px; font-weight: 500;
    color: var(--cd-grey--800);                     /* --ink — deliberately NOT blue */
  }
  .appkit-frame .app-header__subtitle {
    margin: 2px 0 0; font-size: 12.5px;
    color: var(--cd-grey--700);                     /* --muted #737373 */
  }
  .appkit-frame .appkit-body { padding: 24px; }
  .appkit-frame .appkit-lede { margin: 0; font-size: 1rem; color: var(--cd-grey--800); max-width: 64ch; }
  .appkit-frame .appkit-hint { margin: 0.5rem 0 0; font-size: 0.8rem; color: var(--cd-grey--700); }
</style>`;

const header = ({
  title = 'Photo Metadata',
  subtitle = 'Read & write IPTC/XMP metadata on OCHA photos',
} = {}) => `
  <header class="app-header">
    <img class="app-header__logo" src="ocha-logo-horizontal-blue.svg" alt="OCHA" />
    <div class="app-header__titles">
      <h1 class="app-header__title">${title}</h1>
      ${subtitle ? `<p class="app-header__subtitle">${subtitle}</p>` : ''}
    </div>
  </header>`;

const frame = (inner) => `${STYLES}<div class="appkit-frame">${inner}</div>`;

const DESCRIPTION = [
  "The **standard header for OCHA web apps & tools** — internal tools, utilities, single-purpose apps. **Not for public websites**: those use the site [`Header`](?path=/story/composites-header--default) composite and follow the reference sites (reliefweb.int · unocha.org · humanitarianaction.info).",
  "",
  "Established from the **Photo Metadata tool** and adopted into the OCHA App Kit as the shared standard, so every OCHA tool opens the same way.",
  "",
  "### Anatomy",
  "An 8px **cyan signature rule** runs along the very top of the app. Directly beneath sits a **full-width white bar**: **logo · divider · title / subtitle**, left-aligned. Flat — no drop shadow.",
  "",
  "### The one deliberate rule",
  "The tool **title is `--ink` (near-black `#4D4D4D`), not blue.** Brand lives in the logo and the cyan rule; the tool name stays quiet so it doesn't compete. This is the single, intentional change from the source design (where the title was blue).",
  "",
  "### Structure",
  "```html",
  '<header class="app-header">',
  '  <img class="app-header__logo" src="ocha-logo-horizontal-blue.svg" alt="OCHA">',
  '  <div class="app-header__titles">',
  '    <h1 class="app-header__title">Photo Metadata</h1>',
  '    <p class="app-header__subtitle">Read & write IPTC/XMP metadata</p>',
  "  </div>",
  "</header>",
  "```",
  "",
  "### Tokens (App Kit → Common Design System)",
  "| App Kit token | Value | Common Design token |",
  "| --- | --- | --- |",
  "| `--ocha-cyan` (signature rule) | `#009EDB` | `--brand-primary` |",
  "| `--ink` (title) | `#4D4D4D` | `--brand-default-text-color` · `--cd-grey--800` |",
  "| `--muted` (subtitle) | `#737373` | `--brand-grey--text` · `--cd-grey--700` |",
  "| `--card` (bar background) | `#FFFFFF` | `--cd-white` |",
  "| `--line` (divider / border) | `#E2E5E8` | ≈ `--cd-grey--400` (`#E6E6E6`) — see note |",
  "| `--bg` (app surface) | `#F2F2F2` | `--brand-grey` · `--cd-grey--300` |",
  "",
  "> **Token note:** the App Kit hairline `--line` (`#E2E5E8`) is a hair bluer than the CDS neutral `--cd-grey--400` (`#E6E6E6`). Recommend reconciling to one value so the App Kit stays on the CDS ramp.",
  "",
  "### Source of truth",
  "The canonical CSS lives in **`app-kit/ocha-app-kit.css`** (`.app-header`). Edit it there and run `app-kit/sync.py` to push it to every registered app — never restyle in an app. This story mirrors those rules for display only.",
].join("\n");

export default {
  title: 'Composites/App header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: { component: DESCRIPTION },
    },
  },
};

export const Default = () => frame(header());

export const TitleOnly = () => frame(header({ subtitle: '' }));
TitleOnly.parameters = {
  docs: { description: { story: 'Subtitle is optional — omit it for a tool whose name is self-explanatory.' } },
};

export const InContext = () => frame(
  header() +
  `<div class="appkit-body">
     <p class="appkit-lede">The header sits directly under the 8px cyan signature rule, above the app's main content on the light surface.</p>
     <p class="appkit-hint">Websites use the site Header instead — see Composites → Header.</p>
   </div>`
);
InContext.parameters = {
  docs: { description: { story: 'The header in place at the top of an app shell — cyan rule, white bar, then the light app surface.' } },
};
