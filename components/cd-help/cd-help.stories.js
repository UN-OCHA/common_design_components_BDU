import './cd-help.css';
import '../cd-block-title/cd-block-title.css';

export default {
  title: 'Components/Help (step explainer)',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A round “?” button beside a step title that toggles a plain-language explainer panel. The “?” is a UI-chrome icon → Font Awesome (`fa-question`) in apps; shown here as a text “?”. From the OCHA App Kit (v0.1.1), prompted by QuickVid user-testing. Apps wire a 3-line delegated toggle (flip `aria-expanded` + the panel’s `hidden`).',
      },
    },
  },
};

const panelHTML = `
  <p>Drag the handles to set where the clip starts and ends — the preview updates as you drag.</p>
  <p><strong>Tip:</strong> keep clips under 60 seconds for social media.</p>
`;

export const Default = () => {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '440px';
  wrap.innerHTML = `
    <h3 class="cd-block-title">
      Trim the clip
      <button class="cd-help__btn" aria-expanded="false" aria-controls="help-demo" aria-label="Help for this step">?</button>
    </h3>
    <div class="cd-help__panel" id="help-demo" hidden>${panelHTML}</div>
  `;
  const btn = wrap.querySelector('.cd-help__btn');
  const panel = wrap.querySelector('#help-demo');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
  return wrap;
};

export const Expanded = () => `
  <div style="max-width: 440px;">
    <h3 class="cd-block-title">
      Trim the clip
      <button class="cd-help__btn" aria-expanded="true" aria-label="Help for this step">?</button>
    </h3>
    <div class="cd-help__panel">${panelHTML}</div>
  </div>
`;
