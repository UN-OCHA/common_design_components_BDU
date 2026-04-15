import './cd-utilities.css';

export default {
  title: 'Components/Utilities',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Shared utility classes. These are helpers referenced by other components; they can also be used directly in markup.',
      },
    },
  },
};

const row = (cls, label, content) => `
  <div style="display: grid; grid-template-columns: 220px 1fr; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid var(--brand-grey);">
    <code style="color: var(--brand-primary--text);">${cls}</code>
    <div>
      ${content}
      <div style="font-size: 0.8125rem; color: var(--brand-grey--text); margin-top: 0.25rem;">${label}</div>
    </div>
  </div>
`;

export const AllUtilities = () => `
  <div style="max-width: 760px;">
    ${row('.cd-align--center', 'Centres text',
      '<div class="cd-align--center" style="background: var(--brand-grey); padding: 0.5rem;">Centred</div>')}
    ${row('.cd-align--right', 'Right-aligns text',
      '<div class="cd-align--right" style="background: var(--brand-grey); padding: 0.5rem;">Right</div>')}
    ${row('.cd-float--left', 'Floats left',
      '<div style="background: var(--brand-grey); padding: 0.5rem; overflow: hidden;"><span class="cd-float--left" style="background: var(--brand-primary--lighter); padding: 0.25rem 0.5rem;">Floated</span> Content after.</div>')}
    ${row('.cd-float--right', 'Floats right',
      '<div style="background: var(--brand-grey); padding: 0.5rem; overflow: hidden;"><span class="cd-float--right" style="background: var(--brand-primary--lighter); padding: 0.25rem 0.5rem;">Floated</span> Content before.</div>')}
    ${row('[class*="__image--rounded"]', 'Makes a square image circular',
      '<div class="demo__image--rounded" style="width: 64px; height: 64px; background: url(https://i.pravatar.cc/128?img=12) center/cover;"></div>')}
    ${row('.visually-hidden', 'Hides content visually but keeps it for assistive tech',
      '<span>Visible</span> <span class="visually-hidden">screen-reader only</span>')}
  </div>
`;
