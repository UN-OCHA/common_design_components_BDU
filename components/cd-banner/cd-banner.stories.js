import './cd-banner.css';

export default {
  title: 'Components/Banner',
  tags: ['autodocs'],
};

export const Default = () => `
  <div class="cd-banner">
    <img class="cd-banner__image" src="https://picsum.photos/1920/687" alt="Banner image">
  </div>
`;

export const WithCaption = () => `
  <div class="cd-banner">
    <img class="cd-banner__image" src="https://picsum.photos/1920/687?random=2" alt="Banner image">
  </div>
  <div style="max-width: 1220px; margin: 0 auto; padding: 0 1rem; text-align: right; font-size: 0.875rem; font-style: italic;">
    Photo credit: OCHA / Example photographer
  </div>
`;

export const Narrow = () => `
  <div class="cd-banner">
    <img class="cd-banner__image" src="https://picsum.photos/1280/400?random=3" alt="Banner image">
  </div>
`;
