import './cd-user-menu.css';

export default {
  title: 'Composites/User Menu',
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'brand' },
    docs: {
      description: {
        component:
          'Account dropdown displayed inside the dark global header strip. Click the trigger to expand. Designed to sit on the brand primary blue background.',
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

const wrap = (inner) => `
  <div style="background: var(--brand-primary); padding: 0; display: flex; justify-content: flex-end; height: var(--cd-global-header-height);">
    ${inner}
  </div>
`;

const setupToggle = () => `
  <script>
    (function(){
      document.querySelectorAll('.cd-user-menu__btn').forEach(function(btn){
        btn.addEventListener('click', function(){
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
        });
      });
    })();
  </script>
`;

const menu = ({ username = 'J. Cueto', expanded = false } = {}) => `
  <ul class="cd-user-menu">
    <li>
      <button type="button" class="cd-user-menu__btn" aria-expanded="${expanded}" aria-haspopup="true">
        ${userIcon}<span>${username}</span>${arrow}
      </button>
      <ul class="cd-user-menu__dropdown">
        <li><a href="#">My profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Sign out</a></li>
      </ul>
    </li>
  </ul>
`;

export const Default = () => wrap(menu()) + setupToggle();
export const Expanded = () => wrap(menu({ expanded: true })) + setupToggle();
export const LongUsername = () => wrap(menu({ username: 'Javier Cueto Ocha' })) + setupToggle();
