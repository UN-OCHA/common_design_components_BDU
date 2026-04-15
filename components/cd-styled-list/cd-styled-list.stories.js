import './cd-styled-list.css';

export default {
  title: 'Components/Styled List',
  tags: ['autodocs'],
};

const item = ({ title, date, description, image }) => `
  <li>
    ${image ? `<div class="cd-styled-list__image"><img src="${image}" alt=""></div>` : ''}
    <div class="cd-styled-list__container">
      <div class="cd-styled-list__title"><a href="#">${title}</a></div>
      <div class="cd-styled-list__description"><p>${description}</p></div>
    </div>
    ${date ? `<div class="cd-styled-list__date">${date}</div>` : ''}
    <div class="cd-styled-list__footer">
      <a href="#">Read more</a>
    </div>
  </li>
`;

export const Default = () => `
  <ul class="cd-styled-list">
    ${item({ title: 'Humanitarian Needs Overview 2026', date: '1 February 2026', description: 'A global picture of humanitarian needs across all active responses.', image: 'https://picsum.photos/64/64?random=4' })}
    ${item({ title: 'Global Humanitarian Overview 2026', date: '1 December 2025', description: 'Key figures, trends, and appeal requirements for the year ahead.', image: 'https://picsum.photos/64/64?random=5' })}
    ${item({ title: 'Situation update', date: '15 March 2026', description: 'The most recent situation update from the field.' })}
  </ul>
`;

export const NoImages = () => `
  <ul class="cd-styled-list">
    ${item({ title: 'First report', description: 'A short description.' })}
    ${item({ title: 'Second report', description: 'A short description.' })}
  </ul>
`;
