import './cd-teaser.css';

export default {
  title: 'Components/Teaser',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Teaser title' },
    description: { control: 'text', description: 'Teaser body text' },
    showImage: { control: 'boolean', description: 'Show image' },
    showFooter: { control: 'boolean', description: 'Show footer' },
  },
};

const placeholder = 'https://placehold.co/400x250/E3EDF6/004987?text=OCHA';

const Template = ({ title, description, showImage, showFooter }) => {
  const imageBlock = showImage
    ? `<div class="cd-teaser__image"><img src="${placeholder}" alt="Placeholder"></div>`
    : '';
  const footerBlock = showFooter
    ? `<div class="cd-teaser__footer"><a href="#">Read more</a></div>`
    : '';

  return `
    <article class="cd-teaser">
      ${imageBlock}
      <div class="cd-teaser__container">
        <h3 class="cd-teaser__title"><a href="#">${title}</a></h3>
        <p>${description}</p>
      </div>
      ${footerBlock}
    </article>
  `;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Flash update: Earthquake response',
  description: 'Coordination teams are assessing damage and deploying emergency resources to affected areas.',
  showImage: false,
  showFooter: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Situation report #15',
  description: 'Humanitarian partners continue to scale up operations as the crisis enters its third month.',
  showImage: true,
  showFooter: true,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  title: 'Funding snapshot: Q3 2024',
  description: 'An overview of contributions received against requirements for the current response plan.',
  showImage: false,
  showFooter: true,
};

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 700px;">

    <article class="cd-teaser">
      <div class="cd-teaser__container">
        <h3 class="cd-teaser__title"><a href="#">Text-only teaser</a></h3>
        <p>A simple teaser with title and description.</p>
      </div>
    </article>

    <article class="cd-teaser">
      <div class="cd-teaser__image"><img src="${placeholder}" alt="Placeholder"></div>
      <div class="cd-teaser__container">
        <h3 class="cd-teaser__title"><a href="#">Teaser with image</a></h3>
        <p>Image appears on the left at wider viewports.</p>
      </div>
      <div class="cd-teaser__footer"><a href="#">Read more</a></div>
    </article>

    <article class="cd-teaser">
      <div class="cd-teaser__container">
        <h3 class="cd-teaser__title"><a href="#">Teaser with footer link</a></h3>
        <p>Footer provides additional navigation.</p>
      </div>
      <div class="cd-teaser__footer"><a href="#">View details</a></div>
    </article>

  </div>
`;
