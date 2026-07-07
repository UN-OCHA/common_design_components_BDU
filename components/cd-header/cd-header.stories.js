import './cd-header.css';
import '../cd-menu/cd-menu.css';

export default {
  title: 'Composites/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Canonical OCHA header — the single source of truth, synthesized from reliefweb.int (most compliant), unocha.org and humanitarianaction.info. A slim **dark** utility bar carries only secondary links (related sites, help, log in) and no logo; the **white** main header below carries the one OCHA logo (horizontal, blue), the main navigation and search. The bright-blue band and duplicate logo of older implementations are gone, and account/sign-in is demoted to the utility bar. This is the header for **websites** — OCHA **web apps & tools** use the App header instead (see Composites → App header).',
      },
    },
  },
};

const searchIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z"/>
  </svg>`;

const menuItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#' },
  { label: 'What we do', href: '#' },
  { label: 'Where we work', href: '#' },
  { label: 'Latest', href: '#' },
];

const utilityLinks = [
  { label: 'Related sites', href: '#' },
  { label: 'Help', href: '#' },
  { label: 'Log in', href: '#' },
];

const renderUtilityBar = () => `
  <div class="cd-global-header">
    <div class="cd-global-header__inner">
      <ul class="cd-global-header__menu">
        ${utilityLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
      </ul>
    </div>
  </div>`;

const renderMenu = (navOpen) => `
  <nav class="cd-site-header__nav" id="cd-header-nav" aria-label="Main navigation" data-cd-hidden="${!navOpen}">
    <ul class="cd-menu">
      ${menuItems.map((i) => `
        <li class="cd-menu__item${i.active ? ' cd-menu__item--active-trail' : ''}">
          <a class="cd-menu__link${i.active ? ' is-active' : ''}" href="${i.href}">${i.label}</a>
        </li>`).join('')}
    </ul>
  </nav>`;

const interactivity = `
  <script>
    (function(){
      document.querySelectorAll('[data-cd-search-toggle]').forEach(function(btn){
        btn.addEventListener('click', function(){
          var panel = document.getElementById(btn.getAttribute('aria-controls'));
          if (!panel) return;
          var hidden = panel.getAttribute('data-cd-hidden') !== 'false';
          panel.setAttribute('data-cd-hidden', hidden ? 'false' : 'true');
          btn.setAttribute('aria-expanded', String(hidden));
        });
      });
      document.querySelectorAll('[data-cd-menu-toggle]').forEach(function(btn){
        btn.addEventListener('click', function(){
          var nav = document.getElementById(btn.getAttribute('aria-controls'));
          if (!nav) return;
          var hidden = nav.getAttribute('data-cd-hidden') !== 'false';
          nav.setAttribute('data-cd-hidden', hidden ? 'false' : 'true');
          btn.setAttribute('aria-expanded', String(hidden));
        });
      });
    })();
  </script>`;

const buildHeader = ({ navOpen = false, searchOpen = false, utility = true } = {}) => `
  <header class="cd-header">
    ${utility ? renderUtilityBar() : ''}

    <div class="cd-site-header">
      <div class="cd-site-header__inner">
        <a href="#" class="cd-site-header__logo" aria-label="OCHA home">
          <img src="ocha-logo-horizontal-blue.svg" alt="OCHA" />
        </a>

        ${renderMenu(navOpen)}

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
               type="search" placeholder="Search OCHA..." />
        <button type="submit" class="cd-header__search-submit">Search</button>
      </form>
    </div>
  </header>
  ${interactivity}
`;

export const Default = () => buildHeader({});

export const WithSearchOpen = () => buildHeader({ searchOpen: true });

export const WithoutUtilityBar = () => buildHeader({ utility: false });
WithoutUtilityBar.parameters = {
  docs: { description: { story: 'The utility bar is optional. Sites with no secondary links (like unocha.org) can omit it and lead with the white main header.' } },
};

export const MobileCollapsed = () => `
  <div style="max-width: 420px; border: 1px solid var(--brand-grey--border);">
    ${buildHeader({ navOpen: false })}
  </div>
`;
MobileCollapsed.parameters = { viewport: { defaultViewport: 'mobile1' } };

export const MobileMenuOpen = () => `
  <div style="max-width: 420px; border: 1px solid var(--brand-grey--border);">
    ${buildHeader({ navOpen: true })}
  </div>
`;
MobileMenuOpen.parameters = { viewport: { defaultViewport: 'mobile1' } };
