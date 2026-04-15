import './cd-search--inline.css';

export default {
  title: 'Components/Search (inline)',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
  },
};

const Template = ({ placeholder }) => `
  <div class="cd-search--inline">
    <form class="cd-search--inline__form" role="search" aria-label="Site search" onsubmit="return false">
      <label class="visually-hidden" for="cd-search--inline-input">Search</label>
      <input
        id="cd-search--inline-input"
        class="cd-search--inline__input"
        type="search"
        name="keys"
        placeholder="${placeholder}">
      <button class="cd-search--inline__submit" type="submit">
        <svg aria-hidden="true" focusable="false">
          <use href="/cd-icons-sprite.svg#cd-icon--search"></use>
        </svg>
        <span class="visually-hidden">Search</span>
      </button>
    </form>
  </div>
`;

export const Default = Template.bind({});
Default.args = { placeholder: 'What are you looking for?' };

export const OnDarkBackground = Template.bind({});
OnDarkBackground.args = { placeholder: 'Search the site' };
OnDarkBackground.parameters = { backgrounds: { default: 'OCHA Blue' } };
