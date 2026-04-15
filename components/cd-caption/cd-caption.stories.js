import './cd-caption.css';

export default {
  title: 'Components/Caption',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = ({ text }) => `<div class="cd-caption">${text}</div>`;

export const Default = Template.bind({});
Default.args = { text: 'Photo: OCHA / Giles Clarke' };

export const Long = Template.bind({});
Long.args = {
  text: 'A woman carries her child through a camp for internally displaced people in northern Mozambique. Photo: OCHA / Saviano Abreu',
};
