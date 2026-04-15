import '../tokens/brand.css';

/** @type {import('@storybook/html').Preview} */
const preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'OCHA Blue', value: '#009EDB' },
        { name: 'light grey', value: '#F2F2F2' },
        { name: 'dark', value: '#262626' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Foundations',
          [
            'Colours',
            'Typography',
            'Spacing',
            'Logo',
            'Iconography',
            'Data visualization',
            [
              'Key figures (text)',
              'Horizontal bar',
              'Vertical bar',
              'Stacked bar',
              '100% stacked',
              'Line',
              'Pie',
              'Donut',
              'Bubble (surface area)',
              'Sankey',
              'Table',
              'Map',
            ],
          ],
          'Components',
          'Building with AI',
        ],
      },
    },
  },
};
export default preview;
