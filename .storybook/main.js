import remarkGfm from 'remark-gfm';

/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  stories: [
    '../docs/**/*.mdx',
    '../components/**/*.stories.@(js|mdx)',
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
