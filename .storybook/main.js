/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  stories: [
    '../docs/**/*.mdx',
    '../components/**/*.stories.@(js|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};
export default config;
