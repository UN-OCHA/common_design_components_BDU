import remarkGfm from 'remark-gfm';

/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  stories: [
    '../docs/**/*.mdx',
    '../components/**/*.stories.@(js|mdx)',
    // App Kit stories (the app/tool layer of the design system) live beside their
    // source CSS in app-kit/, so the story and its single source of truth stay together.
    '../app-kit/**/*.stories.@(js|mdx)',
  ],
  addons: [
    // Use essentials but defer its bundled docs addon so we can register
    // @storybook/addon-docs explicitly with remark-gfm below.
    {
      name: '@storybook/addon-essentials',
      options: { docs: false },
    },
    // remark-gfm enables GitHub-Flavored Markdown in MDX — WITHOUT this every
    // `|---|` table in the docs renders as raw pipes. Load-bearing: do not drop.
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};
export default config;
