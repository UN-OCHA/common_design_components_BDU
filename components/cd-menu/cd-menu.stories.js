import './cd-menu.css';

export default {
  title: 'Composites/Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Main navigation list used inside `cd-header`. Renders as a horizontal row on desktop and a vertical drawer on mobile. The active item gets a red highlight underline.',
      },
    },
  },
};

const items = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Contact', href: '#' },
];

const renderItems = (list) => list
  .map(
    (i) => `
    <li class="cd-menu__item${i.active ? ' cd-menu__item--active-trail' : ''}">
      <a class="cd-menu__link${i.active ? ' is-active' : ''}" href="${i.href}">${i.label}</a>
    </li>`,
  )
  .join('');

export const Default = () => `
  <nav aria-label="Main">
    <ul class="cd-menu">${renderItems(items)}</ul>
  </nav>
`;

export const NoActive = () => `
  <nav aria-label="Main">
    <ul class="cd-menu">${renderItems(items.map((i) => ({ ...i, active: false })))}</ul>
  </nav>
`;

export const ShortMenu = () => `
  <nav aria-label="Main">
    <ul class="cd-menu">${renderItems([
      { label: 'Home', href: '#', active: true },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ])}</ul>
  </nav>
`;
