import './cd-select-a11y.css';

export default {
  title: 'Components/Select (a11y)',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Brand styling for the [select-a11y](http://pidila.gitlab.io/select-a11y/) widget. The widget itself ships its own JS — the markup below is a static visual snapshot of its open / closed states.',
      },
    },
  },
};

export const Closed = () => `
  <div class="select-a11y" style="max-width: 320px;">
    <button type="button" class="btn-select-a11y" aria-expanded="false">
      Choose options
      <span class="icon-select" aria-hidden="true"></span>
    </button>
  </div>
`;

export const OpenWithSuggestions = () => `
  <div class="select-a11y is-open" style="max-width: 320px; margin-bottom: 12rem;">
    <button type="button" class="btn-select-a11y" aria-expanded="true">
      Choose countries
      <span class="icon-select" aria-hidden="true"></span>
    </button>
    <div class="a11y-container">
      <input type="text" placeholder="Filter">
      <ul class="a11y-suggestions">
        <li class="a11y-suggestion" aria-selected="true">Ethiopia</li>
        <li class="a11y-suggestion">Sudan</li>
        <li class="a11y-suggestion">Myanmar</li>
        <li class="a11y-suggestion">Afghanistan</li>
      </ul>
    </div>
  </div>
`;

export const WithSelectedTags = () => `
  <div class="select-a11y" style="max-width: 320px;">
    <ul class="list-inline list-selected">
      <li>
        <span class="tag-item">Ethiopia</span>
        <button type="button" class="tag-item-supp" aria-label="Remove Ethiopia">
          <span class="icon-delete" aria-hidden="true"></span>
        </button>
      </li>
      <li>
        <span class="tag-item">Sudan</span>
        <button type="button" class="tag-item-supp" aria-label="Remove Sudan">
          <span class="icon-delete" aria-hidden="true"></span>
        </button>
      </li>
    </ul>
  </div>
`;
