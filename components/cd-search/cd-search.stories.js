import './cd-search.css';

export default {
  title: 'Components/Search',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', description: 'Input placeholder text' },
    buttonLabel: { control: 'text', description: 'Button text' },
    small: { control: 'boolean', description: 'Small variant' },
    fullWidth: { control: 'boolean', description: 'Full-width variant' },
  },
};

const Template = ({ placeholder, buttonLabel, small, fullWidth }) => {
  const classes = [
    'cd-search',
    small ? 'cd-search--small' : '',
    fullWidth ? 'cd-search--full' : '',
  ].filter(Boolean).join(' ');

  return `
    <form class="${classes}" role="search" aria-label="Site search" onsubmit="return false">
      <input class="cd-search__input" type="search" placeholder="${placeholder}" aria-label="Search">
      <button class="cd-search__button" type="submit">${buttonLabel}</button>
    </form>
  `;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  buttonLabel: 'Search',
  small: false,
  fullWidth: false,
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Filter results...',
  buttonLabel: 'Go',
  small: true,
  fullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  placeholder: 'Search all OCHA sites...',
  buttonLabel: 'Search',
  small: false,
  fullWidth: true,
};

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">

    <div>
      <h3 style="margin-bottom: 0.5rem;">Default</h3>
      <form class="cd-search" role="search" aria-label="Search" onsubmit="return false">
        <input class="cd-search__input" type="search" placeholder="Search..." aria-label="Search">
        <button class="cd-search__button" type="submit">Search</button>
      </form>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Small</h3>
      <form class="cd-search cd-search--small" role="search" aria-label="Filter" onsubmit="return false">
        <input class="cd-search__input" type="search" placeholder="Filter..." aria-label="Filter">
        <button class="cd-search__button" type="submit">Go</button>
      </form>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Full width</h3>
      <form class="cd-search cd-search--full" role="search" aria-label="Site search" onsubmit="return false">
        <input class="cd-search__input" type="search" placeholder="Search all OCHA sites..." aria-label="Search">
        <button class="cd-search__button" type="submit">Search</button>
      </form>
    </div>

  </div>
`;
