import './cd-filter.css';
import '../cd-button/cd-button.css';

export default {
  title: 'Components/Filter',
  tags: ['autodocs'],
};

export const Default = () => `
  <div class="cd-filter" data-cd-hidden="false">
    <div class="cd-filter__container">
      <h2 style="margin-top: 0;">Filter results</h2>
      <form class="cd-filter__form" onsubmit="return false">
        <div class="cd-filter__group">
          <label for="f-date-start">Start date</label>
          <input class="cd-filter__input" type="text" id="f-date-start" placeholder="E.g., Sep 10 2025">
        </div>
        <div class="cd-filter__group">
          <label for="f-date-end">End date</label>
          <input class="cd-filter__input" type="text" id="f-date-end" placeholder="E.g., Oct 10 2025">
        </div>
        <div class="cd-filter__group">
          <label for="f-select">Options</label>
          <select id="f-select">
            <option>Option one</option>
            <option>Option two</option>
          </select>
        </div>
        <div class="cd-filter__group">
          <label for="f-kw">Keyword search</label>
          <input class="cd-filter__input" type="text" id="f-kw" placeholder="Enter search term">
        </div>
      </form>
    </div>
  </div>
`;

export const Horizontal = () => `
  <div class="cd-filter cd-filter--horizontal" data-cd-hidden="false">
    <div class="cd-filter__container">
      <form class="cd-filter__form" onsubmit="return false">
        <div class="cd-filter__group">
          <label for="fh-country">Country</label>
          <select id="fh-country"><option>Ethiopia</option><option>Sudan</option></select>
        </div>
        <div class="cd-filter__group">
          <label for="fh-theme">Theme</label>
          <select id="fh-theme"><option>Health</option><option>Protection</option></select>
        </div>
        <div class="cd-filter__group">
          <label for="fh-kw">Keyword</label>
          <input class="cd-filter__input" type="text" id="fh-kw">
        </div>
        <div class="cd-export">
          <button type="button" class="cd-button cd-button--uppercase cd-button--export">Export</button>
        </div>
      </form>
    </div>
  </div>
`;
