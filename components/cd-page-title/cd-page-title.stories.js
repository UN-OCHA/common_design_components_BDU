import './cd-page-title.css';

export default {
  title: 'Components/Page Title',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    variant: { control: 'select', options: ['default', 'landing'] },
  },
};

const Template = ({ text, variant }) => `
  <h1 class="cd-page-title${variant === 'landing' ? ' cd-page-title--landing' : ''}">${text}</h1>
`;

export const Default = Template.bind({});
Default.args = { text: 'Humanitarian response in focus', variant: 'default' };

export const Landing = Template.bind({});
Landing.args = { text: 'Our work', variant: 'landing' };
