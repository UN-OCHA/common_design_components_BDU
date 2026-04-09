import './cd-card.css';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Card title' },
    description: { control: 'text', description: 'Card body text' },
    showImage: { control: 'boolean', description: 'Show card image' },
    clickable: { control: 'boolean', description: 'Entire card is clickable' },
    showFooter: { control: 'boolean', description: 'Show card footer' },
  },
};

const placeholder = 'https://placehold.co/600x400/E3EDF6/004987?text=OCHA';

const Template = ({ title, description, showImage, clickable, showFooter }) => {
  const clickableClass = clickable ? ' cd-card--clickable' : '';
  const imageBlock = showImage
    ? `<div class="cd-card__image"><img src="${placeholder}" alt="Placeholder"></div>`
    : '';
  const footerBlock = showFooter
    ? `<div class="cd-card__footer"><div class="cd-card__link"><a href="#">Read more</a></div></div>`
    : '';
  const titleLink = clickable
    ? `<a href="#">${title}</a>`
    : title;

  return `
    <div class="cd-card${clickableClass}" style="max-width: 320px;">
      ${imageBlock}
      <div class="cd-card__container">
        <h3 class="cd-card__title">${titleLink}</h3>
        <div class="cd-card__description"><p>${description}</p></div>
      </div>
      ${footerBlock}
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Humanitarian response update',
  description: 'Latest coordination efforts across the region continue to address growing needs.',
  showImage: false,
  clickable: false,
  showFooter: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Emergency overview',
  description: 'A brief summary of the current emergency and ongoing response activities.',
  showImage: true,
  clickable: false,
  showFooter: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  title: 'Situation report #12',
  description: 'Click anywhere on this card to navigate to the full report.',
  showImage: true,
  clickable: true,
  showFooter: false,
};

export const AllVariants = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">

    <div class="cd-card">
      <div class="cd-card__container">
        <h3 class="cd-card__title">Basic card</h3>
        <div class="cd-card__description"><p>A simple card with title and description only.</p></div>
      </div>
    </div>

    <div class="cd-card">
      <div class="cd-card__image"><img src="${placeholder}" alt="Placeholder"></div>
      <div class="cd-card__container">
        <h3 class="cd-card__title">Card with image</h3>
        <div class="cd-card__description"><p>This card includes a top image.</p></div>
      </div>
      <div class="cd-card__footer">
        <div class="cd-card__link"><a href="#">Read more</a></div>
      </div>
    </div>

    <div class="cd-card cd-card--clickable">
      <div class="cd-card__image"><img src="${placeholder}" alt="Placeholder"></div>
      <div class="cd-card__container">
        <h3 class="cd-card__title"><a href="#">Clickable card</a></h3>
        <div class="cd-card__description"><p>The entire surface of this card is clickable.</p></div>
      </div>
    </div>

    <div class="cd-card">
      <div class="cd-card__container">
        <h3 class="cd-card__title">Card with footer</h3>
        <div class="cd-card__description"><p>Footer link is separated by a border.</p></div>
      </div>
      <div class="cd-card__footer">
        <div class="cd-card__link"><a href="#">View details</a></div>
      </div>
    </div>

  </div>
`;
