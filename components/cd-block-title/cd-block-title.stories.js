import './cd-block-title.css';

export default {
  title: 'Components/Block Title',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    underline: { control: 'boolean' },
  },
};

const Template = ({ text, underline }) => `
  <h2 class="cd-block-title${underline ? ' cd-block-title--underline' : ''}">${text}</h2>
`;

export const Default = Template.bind({});
Default.args = { text: 'Section heading', underline: false };

export const Underlined = Template.bind({});
Underlined.args = { text: 'Section heading', underline: true };

export const InSidebar = () => `
  <div class="cd-layout__sidebar--first">
    <h2 class="cd-block-title cd-block-title--underline">Sidebar block title</h2>
    <p>When inside a sidebar, the underline uses the brand primary colour.</p>
  </div>
`;
