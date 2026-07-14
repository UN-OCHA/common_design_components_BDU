import './cd-modal.css';
import '../cd-button/cd-button.css';
import '../cd-flow/cd-flow.css';
import '../cd-block-title/cd-block-title.css';

export default {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Overlay dialog — a centred card with a cyan top bar and a close ×, over a dimmed backdrop. Toggle by adding/removing the `hidden` attribute; the app wires close + backdrop clicks (3 lines). From the OCHA App Kit (v0.1.2), prompted by QuickVid’s “Use AI” dialog. Click “Open modal” below to preview.',
      },
    },
  },
};

export const Default = () => {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <button class="cd-button" data-open>Open modal</button>
    <div class="cd-modal" hidden data-modal>
      <div class="cd-modal__panel cd-flow">
        <button class="cd-modal__close" aria-label="Close" data-close>&times;</button>
        <h2 class="cd-block-title">Use AI to help</h2>
        <p>Pick the sentences to keep and the tool assembles them into a clip.</p>
        <button class="cd-button" data-close>Done</button>
      </div>
    </div>
  `;
  const modal = wrap.querySelector('[data-modal]');
  wrap.querySelector('[data-open]').addEventListener('click', () => { modal.hidden = false; });
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('[data-close]')) modal.hidden = true;
  });
  return wrap;
};

export const OpenState = () => {
  // The panel on its own, so the docs show the card without needing to click.
  const wrap = document.createElement('div');
  wrap.style.cssText = 'position: relative; min-height: 240px; display: grid; place-items: center; background: color-mix(in srgb, var(--cd-grey--800) 12%, transparent); padding: 1rem; border-radius: var(--brand-radius);';
  wrap.innerHTML = `
    <div class="cd-modal__panel cd-flow" style="position: relative;">
      <button class="cd-modal__close" aria-label="Close">&times;</button>
      <h2 class="cd-block-title">Use AI to help</h2>
      <p>Pick the sentences to keep and the tool assembles them into a clip.</p>
      <button class="cd-button">Done</button>
    </div>
  `;
  return wrap;
};
