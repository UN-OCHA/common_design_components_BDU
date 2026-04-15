import './cd-figure-list.css';

export default {
  title: 'Components/Figure List',
  tags: ['autodocs'],
};

const item = (label, value, small) => `
  <li class="cd-figure-list__item">
    <div class="cd-figure-list__label">${label}${small ? ` <small>${small}</small>` : ''}</div>
    <div class="cd-figure-list__value">${value}</div>
  </li>
`;

export const Default = () => `
  <ul class="cd-figure-list">
    ${item('People in Need', '18.4 million')}
    ${item('People targeted', '15.7 million')}
    ${item('Requirements', '1.3 billion', '(US$)')}
  </ul>
`;

export const Large = () => `
  <ul class="cd-figure-list cd-figure-list--large">
    ${item('People in Need', '18.4 million')}
    ${item('People targeted', '15.7 million')}
    ${item('Requirements', '1.3 billion', '(US$)')}
  </ul>
`;

export const Small = () => `
  <ul class="cd-figure-list cd-figure-list--small">
    ${item('Total Population', '38.9 million')}
    ${item('Income level', 'Low income')}
    ${item('INFORM Severity', '4.6 / Very High')}
    ${item('Consecutive appeals', '2009 – 2026')}
    ${item('People reached (2024)', '10 million')}
  </ul>
`;
