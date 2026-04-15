/**
 * CD Social Links — copy URL to clipboard
 * Source: common_design/libraries/cd-social-links/cd-social-links.js
 *
 * Changes from CD:
 *   - Dropped legacy execCommand('copy') fallback — navigator.clipboard is
 *     baseline in supported browsers.
 *   - Exposed as a named init() function for explicit wiring.
 */
export function initSocialLinks(root = document) {
  const buttons = root.querySelectorAll('.cd-social-links__button--copy');
  buttons.forEach((el) => {
    const status = el.parentNode.querySelector('[role="status"]');
    el.addEventListener('click', async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      try {
        await navigator.clipboard.writeText(el.dataset.url || window.location.href);
        el.parentNode.classList.add('is--showing-message');
        if (status) status.textContent = el.dataset.message || 'URL copied';
        setTimeout(() => el.parentNode.classList.remove('is--showing-message'), 2500);
        setTimeout(() => { if (status) status.textContent = ''; }, 3000);
      } catch (err) {
        console.error(err);
      }
    });
  });
}
