import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const ochaTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'OCHA Design System — Common Design',
  brandUrl: 'https://brand.unocha.org',
  brandImage: './ocha-logo-white.svg',
  brandTarget: '_blank',

  // Sidebar
  colorPrimary: '#009EDB',
  colorSecondary: '#0077B8',

  // UI
  appBg: '#002E6E',
  appContentBg: '#FFFFFF',
  appBorderColor: '#004987',
  appBorderRadius: 4,

  // Text
  textColor: '#FFFFFF',
  textInverseColor: '#002E6E',

  // Toolbar
  barTextColor: '#C5DFEF',
  barSelectedColor: '#009EDB',
  barHoverColor: '#64BDEA',
  barBg: '#004987',

  // Form
  inputBg: '#0074B7',
  inputBorder: '#004987',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,
});

addons.setConfig({
  theme: ochaTheme,
});
