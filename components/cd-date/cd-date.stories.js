import './cd-date.css';

export default {
  title: 'Components/Date',
  tags: ['autodocs'],
  argTypes: {
    day: { control: 'text' },
    month: { control: 'text' },
    year: { control: 'text' },
  },
};

const Template = ({ day, month, year }) => `
  <div class="cd-date">
    <div class="cd-date__wrapper">
      <span class="cd-date__day">${day}</span>
    </div>
    <div class="cd-date__wrapper">
      <span class="cd-date__month">${month}</span>
      <span class="cd-date__year">${year}</span>
    </div>
  </div>
`;

export const Default = Template.bind({});
Default.args = { day: '20', month: 'Sep', year: '2026' };

export const WorldHumanitarianDay = Template.bind({});
WorldHumanitarianDay.args = { day: '19', month: 'Aug', year: '2026' };
