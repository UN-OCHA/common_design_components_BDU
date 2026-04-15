import './cd-dropdown.css';

export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
};

// Simple togglable dropdown implemented inline for demo purposes.
const makeDropdown = () => {
  const wrap = document.createElement('div');
  wrap.style.position = 'relative';
  wrap.style.display = 'inline-block';
  wrap.innerHTML = `
    <button type="button" class="cd-button" aria-expanded="false" aria-controls="demo-dropdown">
      <span class="cd-button__text">Toggle menu</span>
    </button>
    <div
      id="demo-dropdown"
      class="cd-dropdown"
      data-cd-toggable
      data-cd-processed
      data-cd-hidden="true"
      style="position:absolute; top:100%; left:0; min-width:12rem; margin-top:0.25rem; padding:0.5rem 1rem; background:#fff; border:1px solid var(--brand-grey--border); border-radius:0.25rem; box-shadow:0 2px 8px rgba(0,0,0,0.08);"
    >
      <ul style="margin:0; padding:0; list-style:none;">
        <li><a href="#" style="display:block; padding:0.25rem 0;">First option</a></li>
        <li><a href="#" style="display:block; padding:0.25rem 0;">Second option</a></li>
        <li><a href="#" style="display:block; padding:0.25rem 0;">Third option</a></li>
      </ul>
    </div>
  `;
  const btn = wrap.querySelector('button');
  const dd = wrap.querySelector('.cd-dropdown');
  btn.addEventListener('click', () => {
    const hidden = dd.getAttribute('data-cd-hidden') === 'true';
    dd.setAttribute('data-cd-hidden', hidden ? 'false' : 'true');
    btn.setAttribute('aria-expanded', String(hidden));
  });
  return wrap;
};

export const Default = () => makeDropdown();
