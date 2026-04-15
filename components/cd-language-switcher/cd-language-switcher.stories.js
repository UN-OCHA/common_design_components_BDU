import './cd-language-switcher.css';

export default {
  title: 'Components/Language Switcher',
  tags: ['autodocs'],
};

const LANGUAGES = [
  { code: 'en', label: 'English', active: true },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' },
];

export const Default = () => `
  <nav class="cd-language-switcher" aria-label="Language">
    <ul class="cd-language-switcher__list">
      ${LANGUAGES.map(l => `
        <li>
          <a href="#"
             hreflang="${l.code}"
             lang="${l.code}"
             class="cd-language-switcher__link${l.active ? ' is-active' : ''}"
             ${l.active ? 'aria-current="true"' : ''}>
            ${l.label}
          </a>
        </li>
      `).join('')}
    </ul>
  </nav>
`;
