import './cd-disclosure.css';

export default {
  title: 'Components/Disclosure',
  tags: ['autodocs'],
};

// Minimal vanilla disclosure. In production this is wired via cd-disclosure.js.
const makeDisclosure = ({ expanded = false, label = 'Toggle content' } = {}) => {
  const wrap = document.createElement('div');
  wrap.classList.add('js'); // enable collapsed styling
  wrap.innerHTML = `
    <p>The first paragraphs of content are always visible, regardless of the button state.</p>
    <p>Use the button below to reveal or hide the extra content.</p>
    <button type="button" class="cd-button" aria-expanded="${expanded}">
      <span class="cd-button__text">${label}</span>
    </button>
    <div class="cd-disclosure ${expanded ? '' : 'cd-disclosure--is-collapsed'}">
      <p>This is expanded content revealed by the toggle button.</p>
      <p>Exercitation consectetur irure ea et dolor id eiusmod nostrud fugiat in sit ex ea culpa magna sit excepteur ullamco duis voluptate ullamco sed do laborum.</p>
    </div>
  `;
  const btn = wrap.querySelector('button');
  const region = wrap.querySelector('.cd-disclosure');
  btn.addEventListener('click', () => {
    const isCollapsed = region.classList.toggle('cd-disclosure--is-collapsed');
    btn.setAttribute('aria-expanded', String(!isCollapsed));
  });
  return wrap;
};

export const Collapsed = () => makeDisclosure({ expanded: false });
export const Expanded = () => makeDisclosure({ expanded: true });
