import './cd-title-list.css';

export default {
  title: 'Components/Title List',
  tags: ['autodocs'],
};

const items = [
  'Historic economic decline is reversing development gains',
  'Conflicts continue to take a heavy toll on civilians',
  'Climate shocks compound humanitarian needs',
  'Protracted displacement affects millions',
];

export const Default = () => `
  <div style="max-width: 640px;">
    <ul class="cd-title-list">
      ${items.map(t => `
        <li class="cd-title-list__item">
          <a href="#" class="cd-title-list__link">
            <span class="cd-title-list__title">${t}</span>
            <svg class="cd-icon" aria-hidden="true" focusable="false">
              <use href="/cd-icons-sprite.svg#cd-icon--arrow-right"></use>
            </svg>
          </a>
        </li>
      `).join('')}
    </ul>
  </div>
`;
