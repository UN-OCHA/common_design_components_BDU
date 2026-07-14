import './cd-progress.css';

export default {
  title: 'Components/Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Thin progress bar — a track with a cyan fill; set the fill `width` %. Optional `__pct` label below. From the OCHA App Kit (v0.1.3), prompted by QuickVid download / transcribe progress.',
      },
    },
  },
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Fill percentage' },
    showLabel: { control: 'boolean', description: 'Show the % label below the bar' },
  },
};

const Template = ({ percent, showLabel }) => `
  <div style="max-width: 360px;">
    <div class="cd-progress"><div class="cd-progress__fill" style="width:${percent}%"></div></div>
    ${showLabel ? `<div class="cd-progress__pct">${percent}%</div>` : ''}
  </div>
`;

export const Default = Template.bind({});
Default.args = { percent: 42, showLabel: true };

export const NoLabel = Template.bind({});
NoLabel.args = { percent: 68, showLabel: false };

export const Complete = Template.bind({});
Complete.args = { percent: 100, showLabel: true };
