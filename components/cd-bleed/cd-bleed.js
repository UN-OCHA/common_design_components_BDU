/**
 * CD Bleed — scrollbar-width accessor
 * Source: common_design/libraries/cd-bleed/cd-bleed.js
 *
 * Updates --cd-bleed-scrollbar-width whenever the viewport width changes,
 * so .cd-bleed can account for scrollbars without overflowing.
 *
 * Changes from CD:
 *   - Removed IE11 fallback (iframe resize detection); ResizeObserver is
 *     now baseline in all supported browsers.
 */
export function initBleed() {
  const update = () => {
    const width = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--cd-bleed-scrollbar-width', `${width}px`);
  };
  if (typeof window.ResizeObserver !== 'undefined') {
    new ResizeObserver(update).observe(document.documentElement);
  }
  update();
}
