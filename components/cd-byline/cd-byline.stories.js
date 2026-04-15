import './cd-byline.css';

export default {
  title: 'Components/Byline',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    text: { control: 'text' },
    imageUrl: { control: 'text' },
    rounded: { control: 'boolean' },
  },
};

const Template = ({ name, text, imageUrl, rounded }) => `
  <div class="cd-byline">
    <div class="cd-byline__wrapper">
      <div class="cd-byline__image${rounded ? ' cd-byline__image--rounded' : ''}">
        <img src="${imageUrl}" alt="${name}">
      </div>
      <div class="cd-byline__content">
        <div class="cd-byline__name">${name}</div>
        <div class="cd-byline__text">${text}</div>
      </div>
    </div>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
  name: 'Martin Griffiths',
  text: 'Under-Secretary-General for Humanitarian Affairs and Emergency Relief Coordinator, United Nations',
  imageUrl: 'https://i.pravatar.cc/128?img=12',
  rounded: false,
};

export const Rounded = Template.bind({});
Rounded.args = { ...Default.args, rounded: true };
