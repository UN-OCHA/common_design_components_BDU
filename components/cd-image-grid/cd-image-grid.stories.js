import './cd-image-grid.css';

export default {
  title: 'Components/Image Grid',
  tags: ['autodocs'],
  argTypes: {
    itemSize: { control: 'text', description: 'Grid cell size (CSS length)' },
  },
};

const placeholder = (size, label) =>
  `<div><img src="https://placehold.co/${size}?text=${encodeURIComponent(label)}" alt="${label}"></div>`;

const iconCell = (id) => `
  <div>
    <svg class="cd-icon" aria-hidden="true">
      <use href="/cd-icons-sprite.svg#cd-icon--${id}"></use>
    </svg>
  </div>
`;

const Template = ({ itemSize }) => `
  <div class="cd-image-grid" style="--cd-image-grid--item-size: ${itemSize};">
    ${placeholder('68x68', 'A')}
    ${placeholder('120x120', 'B')}
    ${iconCell('user')}
    ${iconCell('search')}
    ${placeholder('100x100', 'C')}
    ${placeholder('80x80', 'D')}
    ${iconCell('alert')}
    ${placeholder('96x96', 'E')}
    ${placeholder('68x68', 'F')}
  </div>
`;

export const Default = Template.bind({});
Default.args = { itemSize: '4rem' };

export const Large = Template.bind({});
Large.args = { itemSize: '8rem' };
