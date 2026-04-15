import './cd-bleed.css';
import { initBleed } from './cd-bleed.js';

// Wire up scrollbar-width tracking.
if (typeof window !== 'undefined') initBleed();

export default {
  title: 'Components/Bleed',
  tags: ['autodocs'],
};

export const FullBleed = () => `
  <div style="max-width: 600px; margin: 0 auto; padding: 1rem; outline: 1px dashed var(--brand-grey--border);">
    <p>This container is 600px wide. The block below uses <code>.cd-bleed</code> to break out and stretch to the full viewport width.</p>
    <div class="cd-bleed" style="background: var(--brand-primary--lightest); padding: 2rem; text-align: center;">
      I bleed edge to edge.
    </div>
    <p>Content after the bleed returns to the container width.</p>
  </div>
`;

export const BackgroundOnly = () => `
  <div style="max-width: 600px; margin: 0 auto; padding: 1rem; outline: 1px dashed var(--brand-grey--border);">
    <p>The block below uses <code>.cd-bleed--background-only</code>: the background fills the viewport but text stays within the container.</p>
    <div class="cd-bleed--background-only" style="padding: 2rem; color: var(--cd-white); text-align: center;">
      Content stays aligned, background bleeds.
    </div>
    <p>After the bleed.</p>
  </div>
`;
