import './cd-hero.css';

export default {
  title: 'Components/Hero',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Hero headline' },
    description: { control: 'text', description: 'Hero body text' },
    showImage: { control: 'boolean', description: 'Show background image' },
    showCta: { control: 'boolean', description: 'Show call-to-action button' },
  },
};

const heroImage = 'https://placehold.co/1400x448/004987/FFFFFF?text=OCHA+Hero';

const Template = ({ title, description, showImage, showCta }) => {
  const imageTag = showImage
    ? `<img class="cd-hero__image" src="${heroImage}" alt="Hero background">`
    : '';
  const ctaBlock = showCta
    ? `<div class="cd-hero__footer"><a href="#" class="cd-button">Learn more</a></div>`
    : '';

  return `
    <section class="cd-hero">
      ${imageTag}
      <div class="cd-hero__container">
        <h1 class="cd-hero__title">${title}</h1>
        <p class="cd-hero__description">${description}</p>
        ${ctaBlock}
      </div>
    </section>
  `;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Global Humanitarian Overview 2024',
  description: 'An estimated 300 million people will need humanitarian assistance and protection this year.',
  showImage: true,
  showCta: true,
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Emergency response coordination',
  description: 'OCHA coordinates humanitarian action to ensure crisis-affected people receive assistance.',
  showImage: false,
  showCta: false,
};

export const WithCta = Template.bind({});
WithCta.args = {
  title: 'Donate to the CERF',
  description: 'The Central Emergency Response Fund provides rapid funding for life-saving assistance.',
  showImage: true,
  showCta: true,
};

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">

    <section class="cd-hero">
      <img class="cd-hero__image" src="${heroImage}" alt="Hero background">
      <div class="cd-hero__container">
        <h1 class="cd-hero__title">Hero with image and CTA</h1>
        <p class="cd-hero__description">Full hero banner with background image and action button.</p>
        <div class="cd-hero__footer"><a href="#" class="cd-button">Take action</a></div>
      </div>
    </section>

    <section class="cd-hero">
      <div class="cd-hero__container">
        <h1 class="cd-hero__title">Hero without image</h1>
        <p class="cd-hero__description">A simple text-only hero for internal pages.</p>
      </div>
    </section>

    <section class="cd-hero" style="background-color: var(--brand-primary);">
      <div class="cd-hero__container" style="color: white;">
        <h1 class="cd-hero__title" style="color: white;">Coloured background hero</h1>
        <p class="cd-hero__description" style="color: white;">Uses brand primary as background colour.</p>
      </div>
    </section>

  </div>
`;
