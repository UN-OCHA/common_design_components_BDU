import './cd-grid.css';

export default {
  title: 'Components/Grid',
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: ['default', '2-col', '3-col', '4-col'],
      description: 'Number of columns',
    },
    items: {
      control: { type: 'number', min: 2, max: 8 },
      description: 'Number of grid items',
    },
  },
};

const cellStyle = 'background: var(--cd-blue--lightest, #E3EDF6); padding: 1.5rem; text-align: center; border-radius: 3px;';

const Template = ({ columns, items }) => {
  const colClass = columns !== 'default' ? ` cd-grid--${columns}` : '';
  const cells = Array.from({ length: items }, (_, i) =>
    `<div style="${cellStyle}">Item ${i + 1}</div>`
  ).join('');

  return `<div class="cd-grid${colClass}">${cells}</div>`;
};

export const FourColumns = Template.bind({});
FourColumns.args = { columns: 'default', items: 8 };

export const TwoColumns = Template.bind({});
TwoColumns.args = { columns: '2-col', items: 4 };

export const ThreeColumns = Template.bind({});
ThreeColumns.args = { columns: '3-col', items: 6 };

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 2.5rem;">

    <div>
      <h3 style="margin-bottom: 0.5rem;">Default (4 columns at desktop)</h3>
      <div class="cd-grid">
        <div style="${cellStyle}">Item 1</div>
        <div style="${cellStyle}">Item 2</div>
        <div style="${cellStyle}">Item 3</div>
        <div style="${cellStyle}">Item 4</div>
        <div style="${cellStyle}">Item 5</div>
        <div style="${cellStyle}">Item 6</div>
        <div style="${cellStyle}">Item 7</div>
        <div style="${cellStyle}">Item 8</div>
      </div>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">2 columns</h3>
      <div class="cd-grid cd-grid--2-col">
        <div style="${cellStyle}">Item 1</div>
        <div style="${cellStyle}">Item 2</div>
        <div style="${cellStyle}">Item 3</div>
        <div style="${cellStyle}">Item 4</div>
      </div>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">3 columns</h3>
      <div class="cd-grid cd-grid--3-col">
        <div style="${cellStyle}">Item 1</div>
        <div style="${cellStyle}">Item 2</div>
        <div style="${cellStyle}">Item 3</div>
        <div style="${cellStyle}">Item 4</div>
        <div style="${cellStyle}">Item 5</div>
        <div style="${cellStyle}">Item 6</div>
      </div>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">4 columns (explicit)</h3>
      <div class="cd-grid cd-grid--4-col">
        <div style="${cellStyle}">Item 1</div>
        <div style="${cellStyle}">Item 2</div>
        <div style="${cellStyle}">Item 3</div>
        <div style="${cellStyle}">Item 4</div>
      </div>
    </div>

  </div>
`;
