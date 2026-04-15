import './cd-read-more.css';

export default {
  title: 'Components/Read More',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};

const arrowSvg = `
  <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" class="cd-icon cd-icon--arrow-right">
    <path d="M14,48a4,4,0,0,1-2.83-6.83L28.34,24,11.17,6.83a4,4,0,0,1,5.66-5.66l20,20a4,4,0,0,1,0,5.66l-20,20A4,4,0,0,1,14,48Z"/>
  </svg>
`;

const Template = ({ label }) => `
  <a href="#" class="cd-read-more">${label} ${arrowSvg}</a>
`;

export const Default = Template.bind({});
Default.args = { label: 'Learn more' };

export const ReadFullStory = Template.bind({});
ReadFullStory.args = { label: 'Read the full story' };
