import './cd-link-list.css';

export default {
  title: 'Components/Link List',
  tags: ['autodocs'],
};

const arrowSvg = `
  <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" class="cd-icon cd-icon--arrow-right" width="12" height="12">
    <path d="M14,48a4,4,0,0,1-2.83-6.83L28.34,24,11.17,6.83a4,4,0,0,1,5.66-5.66l20,20a4,4,0,0,1,0,5.66l-20,20A4,4,0,0,1,14,48Z"/>
  </svg>
`;

const item = ({ title, description, image }) => `
  <li class="cd-link-list__item">
    ${image ? `<div class="cd-link-list__image"><img src="${image}" alt=""></div>` : ''}
    <div class="cd-link-list__container">
      <div class="cd-link-list__title"><a href="#">${title}</a></div>
      <div class="cd-link-list__description"><p>${description}</p></div>
    </div>
    <div class="cd-link-list__footer">
      <a href="#" class="cd-link-list__link" aria-label="Read ${title}">${arrowSvg}</a>
    </div>
  </li>
`;

export const Default = () => `
  <ul class="cd-link-list">
    ${item({ title: 'Humanitarian Response Plan 2026', description: 'Overview of needs and requested funding for the year.', image: 'https://picsum.photos/48/48?random=1' })}
    ${item({ title: 'Global Humanitarian Overview', description: 'Key figures and trends across responses worldwide.', image: 'https://picsum.photos/48/48?random=2' })}
    ${item({ title: 'Situation report', description: 'Latest situation report covering the last reporting period.', image: 'https://picsum.photos/48/48?random=3' })}
  </ul>
`;

export const NoImages = () => `
  <ul class="cd-link-list">
    ${item({ title: 'First document', description: 'A short description of the first document.' })}
    ${item({ title: 'Second document', description: 'A short description of the second document.' })}
  </ul>
`;
