import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const ochaTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'OCHA Design System — Common Design',
  brandUrl: 'https://brand.unocha.org',
  brandImage: './ocha-logo-horizontal-white.svg',
  brandTarget: '_blank',

  // Sidebar / accent highlights
  colorPrimary: '#009EDB',
  colorSecondary: '#FFFFFF',

  // UI — Sidebar uses darker UN Blue for legibility
  appBg: '#004987',            // sidebar background (UN Blue dark)
  appContentBg: '#FFFFFF',     // story preview background
  appBorderColor: '#002E6E',
  appBorderRadius: 4,

  // Text — white on dark blue sidebar (AA compliant)
  textColor: '#FFFFFF',
  textInverseColor: '#002E6E',

  // Toolbar — OCHA Blue band above the story preview
  barBg: '#009EDB',
  barTextColor: '#FFFFFF',
  barSelectedColor: '#FFFFFF',
  barHoverColor: '#FFFFFF',

  // Form
  inputBg: '#FFFFFF',
  inputBorder: '#BFBFBF',
  inputTextColor: '#000000',
  inputBorderRadius: 4,
});

addons.setConfig({
  theme: ochaTheme,
});
