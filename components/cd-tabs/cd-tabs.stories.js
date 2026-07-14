import './cd-tabs.css';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Two tab styles. **Website tabs** (`.cd-tabs`, uppercase underline row) are used across OCHA sites. **App tabs** (`.mode-tabs` / `.mode-tab`) are the button-based segmented tab used by OCHA web apps & tools, and each can carry a leading Font Awesome UI icon via `.mode-tab__icon` — see “App tabs with icons”.',
      },
    },
  },
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

export const AppTabsWithIcons = () => `
  <div style="max-width: 460px;">
    <div class="mode-tabs" role="tablist">
      <button class="mode-tab is-active" role="tab" aria-selected="true">
        <svg class="mode-tab__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h18v2H3zM3 11h18v2H3zM3 17h12v2H3z"/></svg>
        Transcript
      </button>
      <button class="mode-tab" role="tab" aria-selected="false">
        <svg class="mode-tab__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
        Preview
      </button>
      <button class="mode-tab" role="tab" aria-selected="false">
        <svg class="mode-tab__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 3h2v9l3.5-3.5L18 10l-6 6-6-6 1.5-1.5L11 12z"/><path d="M5 19h14v2H5z"/></svg>
        Export
      </button>
    </div>
  </div>
`;
AppTabsWithIcons.parameters = {
  docs: {
    description: {
      story:
        'App / tool tabs (`.mode-tabs` / `.mode-tab`) — the button-based segmented tab OCHA web apps use. Each tab carries a leading UI icon via `.mode-tab__icon` (Font Awesome in apps; inline SVG here). UI chrome = Font Awesome; content = OCHA Humanitarian Icons.',
    },
  },
};
