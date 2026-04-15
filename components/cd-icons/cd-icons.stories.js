import './cd-icons.css';

// The full list of symbols in public/cd-icons-sprite.svg.
const ICONS = [
  'about', 'add', 'add--white', 'admin', 'alert',
  'arrow-down', 'arrow-down--highlighted', 'arrow-left', 'arrow-right',
  'arrow-up', 'arrow-up--highlighted',
  'copyurl', 'creative-commons', 'expand-left', 'expand-right',
  'external-link', 'form-error', 'form-required', 'help', 'ocha-logo',
  'pdf', 'search', 'selected', 'selected--highlighted',
  'sm-fb-def', 'sm-fb-full', 'sm-gh-def', 'sm-gh-full',
  'sm-ig-def', 'sm-ig-full', 'sm-ln-def', 'sm-ln-full',
  'sm-rss-def', 'sm-rss-full', 'sm-tt-def', 'sm-tt-full',
  'sm-yt-def', 'sm-yt-full',
  'social-links--facebook', 'social-links--linkedin', 'social-links--twitter',
  'user', 'user--white',
];

export default {
  title: 'Components/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SVG sprite served from `/cd-icons-sprite.svg`. Reference an icon with `<svg class="cd-icon"><use href="/cd-icons-sprite.svg#cd-icon--NAME"></use></svg>`.',
      },
    },
  },
};

export const AllIcons = () => `
  <div class="cd-icons-showcase">
    ${ICONS.map(id => `
      <div class="cd-icons-showcase__item">
        <svg aria-hidden="true" focusable="false">
          <use href="/cd-icons-sprite.svg#cd-icon--${id}"></use>
        </svg>
        <code>${id}</code>
      </div>
    `).join('')}
  </div>
`;

export const Sizes = () => `
  <div style="display: flex; align-items: center; gap: 2rem; color: var(--brand-primary--text);">
    <svg class="cd-icon" aria-hidden="true"><use href="/cd-icons-sprite.svg#cd-icon--alert"></use></svg>
    <svg class="cd-icon cd-icon--lg" aria-hidden="true"><use href="/cd-icons-sprite.svg#cd-icon--alert"></use></svg>
    <svg class="cd-icon cd-icon--xl" aria-hidden="true"><use href="/cd-icons-sprite.svg#cd-icon--alert"></use></svg>
  </div>
`;
