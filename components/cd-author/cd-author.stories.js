import './cd-author.css';

export default {
  title: 'Components/Author',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Author display name' },
    date: { control: 'text', description: 'Date text' },
    imageUrl: { control: 'text', description: 'Avatar image URL' },
    rounded: { control: 'boolean', description: 'Rounded avatar' },
  },
};

const Template = ({ name, date, imageUrl, rounded }) => {
  const roundedClass = rounded ? ' cd-author__image--rounded' : '';
  return `
    <footer class="cd-author">
      <div class="cd-author__image${roundedClass}">
        <img src="${imageUrl}" alt="${name}">
      </div>
      <div class="cd-author__content">
        Submitted by <a href="#" title="View user profile.">${name}</a>
        on ${date}
      </div>
    </footer>
  `;
};

export const Default = Template.bind({});
Default.args = {
  name: 'Jane Doe',
  date: '19 August 2024',
  imageUrl: 'https://i.pravatar.cc/96?img=47',
  rounded: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  name: 'Jane Doe',
  date: '19 August 2024',
  imageUrl: 'https://i.pravatar.cc/96?img=47',
  rounded: true,
};
