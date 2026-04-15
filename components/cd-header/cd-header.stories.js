import './cd-header.css';
import '../cd-menu/cd-menu.css';
import '../cd-user-menu/cd-user-menu.css';

export default {
  title: 'Composites/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top-of-page composite combining the dark global header (user menu) and the white site header (logo, title, search, main menu). Includes a mobile hamburger drawer and a slide-down search panel.',
      },
    },
  },
};

const userIcon = `
  <svg class="cd-user-menu__btn-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z"/>
  </svg>`;

const arrow = `
  <svg class="cd-user-menu__btn-arrow" viewBox="0 0 9 9" aria-hidden="true">
    <polygon points="0,1.5 4.5,7 9,1.5 7.5,0 4.5,3.5 1.5,0"/>
  </svg>`;

const searchIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z"/>
  </svg>`;

const menuItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Contact', href: '#' },
];

const renderMenu = () => `
  <nav aria-label="Main navigation">
    <ul class="cd-menu">
      ${menuItems.map((i) => `
        <li class="cd-menu__item${i.active ? ' cd-menu__item--active-trail' : ''}">
          <a class="cd-menu__link${i.active ? ' is-active' : ''}" href="${i.href}">${i.label}</a>
        </li>`).join('')}
    </ul>
  </nav>`;

const renderUserMenu = (expanded = false) => `
  <ul class="cd-user-menu">
    <li>
      <button type="button" class="cd-user-menu__btn" aria-expanded="${expanded}" aria-haspopup="true" data-cd-user-toggle>
        ${userIcon}<span>J. Cueto</span>${arrow}
      </button>
      <ul class="cd-user-menu__dropdown">
        <li><a href="#">My profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Sign out</a></li>
      </ul>
    </li>
  </ul>`;

const interactivity = `
  <script>
    (function(){
      // User menu toggle
      document.querySelectorAll('[data-cd-user-toggle]').forEach(function(btn){
        btn.addEventListener('click', function(){
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
        });
      });
      // Search toggle
      document.querySelectorAll('[data-cd-search-toggle]').forEach(function(btn){
        btn.addEventListener('click', function(){
          var panel = document.querySelector(btn.getAttribute('aria-controls') ? '#' + btn.getAttribute('aria-controls') : '.cd-header__search');
          if (!panel) return;
          var hidden = panel.getAttribute('data-cd-hidden') !== 'false';
          panel.setAttribute('data-cd-hidden', hidden ? 'false' : 'true');
          btn.setAttribute('aria-expanded', String(hidden));
        });
      });
      // Menu (hamburger) toggle
      document.querySelectorAll('[data-cd-menu-toggle]').forEach(function(btn){
        btn.addEventListener('click', function(){
          var nav = document.querySelector(btn.getAttribute('aria-controls') ? '#' + btn.getAttribute('aria-controls') : '.cd-header__nav');
          if (!nav) return;
          var hidden = nav.getAttribute('data-cd-hidden') !== 'false';
          nav.setAttribute('data-cd-hidden', hidden ? 'false' : 'true');
          btn.setAttribute('aria-expanded', String(hidden));
        });
      });
    })();
  </script>`;

const buildHeader = ({ navOpen = false, searchOpen = false, title = 'Site title' } = {}) => `
  <header class="cd-header">
    <div class="cd-global-header">
      <div class="cd-global-header__inner">
        <a href="https://www.unocha.org" class="cd-global-header__brand" aria-label="OCHA">
          <img src="ocha-logo-horizontal-white.svg" alt="OCHA" />
        </a>
        <div class="cd-global-header__actions">
          ${renderUserMenu()}
        </div>
      </div>
    </div>

    <div class="cd-site-header">
      <div class="cd-site-header__inner">
        <a href="#" class="cd-site-header__logo" aria-label="OCHA home">
          <img src="ocha-logo-blue.svg" alt="OCHA" />
        </a>
        <h1 class="cd-site-header__title">${title}</h1>
        <div class="cd-site-header__actions">
          <button type="button" class="cd-header__btn"
                  aria-label="Search" aria-controls="cd-header-search"
                  aria-expanded="${searchOpen}" data-cd-search-toggle>
            ${searchIcon}
          </button>
          <button type="button" class="cd-header__btn cd-header__menu-toggle"
                  aria-label="Toggle main menu" aria-controls="cd-header-nav"
                  aria-expanded="${navOpen}" data-cd-menu-toggle>
            <span class="cd-header__hamburger" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div id="cd-header-search" class="cd-header__search" data-cd-hidden="${!searchOpen}">
      <form role="search" class="cd-header__search-form" onsubmit="event.preventDefault();">
        <label class="visually-hidden" for="cd-header-search-input">Search</label>
        <input id="cd-header-search-input" class="cd-header__search-input"
               type="search" placeholder="Search..." />
        <button type="submit" class="cd-header__search-submit">Search</button>
      </form>
    </div>

    <div id="cd-header-nav" class="cd-header__nav" data-cd-hidden="${!navOpen}">
      ${renderMenu()}
    </div>
  </header>
  ${interactivity}
`;

export const Default = () => buildHeader({ navOpen: false, searchOpen: false });

export const WithSearchOpen = () => buildHeader({ searchOpen: true });

export const MobileCollapsed = () => `
  <div style="max-width: 480px; border: 1px dashed var(--brand-grey--border);">
    ${buildHeader({ navOpen: false })}
  </div>
`;
MobileCollapsed.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};

export const MobileMenuOpen = () => `
  <div style="max-width: 480px; border: 1px dashed var(--brand-grey--border); position: relative;">
    ${buildHeader({ navOpen: true })}
  </div>
`;
MobileMenuOpen.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
