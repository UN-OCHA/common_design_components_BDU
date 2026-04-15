import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

/**
 * OCHA Design System — Storybook manager theme
 *
 * Inspired by Carbon Design System: muted chrome, brand colour as accent only.
 * Sidebar is near-white so content and component colour shine.
 */
const ochaTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'OCHA Design System — Common Design',
  brandUrl: 'https://brand.unocha.org',
  brandImage: './ocha-logo-horizontal-blue.svg',
  brandTarget: '_blank',

  // Accent — OCHA Blue used only for active/selected/focus states
  colorPrimary: '#009EDB',
  colorSecondary: '#0077B8',

  // App chrome
  appBg: '#FFFFFF',            // sidebar
  appContentBg: '#FFFFFF',     // story preview
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E5E5E5',
  appBorderRadius: 0,          // Carbon-like sharp edges

  // Text — near-black on white (AA+ contrast)
  textColor: '#161616',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#737373',

  // Toolbar (above story preview) — OCHA Blue band for brand consistency
  barBg: '#009EDB',
  barTextColor: '#FFFFFF',
  barSelectedColor: '#FFFFFF',
  barHoverColor: '#FFFFFF',

  // Form
  inputBg: '#FFFFFF',
  inputBorder: '#BFBFBF',
  inputTextColor: '#161616',
  inputBorderRadius: 0,

  // Font stack — Roboto to match brand
  fontBase: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
  fontCode: '"Roboto Mono", "SFMono-Regular", Menlo, Consolas, monospace',
});

addons.setConfig({
  theme: ochaTheme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
