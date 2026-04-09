import './cd-tabs.css';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  argTypes: {
    activeIndex: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Zero-based index of the active tab',
    },
  },
};

const tabLabels = ['Overview', 'Funding', 'Operations', 'Partners'];

const Template = ({ activeIndex }) => {
  const items = tabLabels.map((label, i) => {
    const activeClass = i === activeIndex ? ' is-active' : '';
    return `<li><a href="#" class="${activeClass}">${label}</a></li>`;
  }).join('');

  return `<ul class="cd-tabs" role="tablist">${items}</ul>`;
};

export const Default = Template.bind({});
Default.args = { activeIndex: 0 };

export const SecondActive = Template.bind({});
SecondActive.args = { activeIndex: 1 };

export const TwoTabs = () => `
  <ul class="cd-tabs" role="tablist">
    <li><a href="#" class="is-active">Current</a></li>
    <li><a href="#">Archive</a></li>
  </ul>
`;

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">

    <div>
      <h3 style="margin-bottom: 0.5rem;">Default (first active)</h3>
      <ul class="cd-tabs" role="tablist">
        <li><a href="#" class="is-active">Overview</a></li>
        <li><a href="#">Funding</a></li>
        <li><a href="#">Operations</a></li>
        <li><a href="#">Partners</a></li>
      </ul>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Third tab active</h3>
      <ul class="cd-tabs" role="tablist">
        <li><a href="#">Overview</a></li>
        <li><a href="#">Funding</a></li>
        <li><a href="#" class="is-active">Operations</a></li>
        <li><a href="#">Partners</a></li>
      </ul>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Two tabs</h3>
      <ul class="cd-tabs" role="tablist">
        <li><a href="#" class="is-active">Current</a></li>
        <li><a href="#">Archive</a></li>
      </ul>
    </div>

  </div>
`;
