import './cd-table.css';

export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean', description: 'Striped rows' },
    responsive: { control: 'boolean', description: 'Responsive stacking on mobile' },
  },
};

const sampleRows = [
  { country: 'Afghanistan', people: '24.4M', funding: '$1.1B' },
  { country: 'Yemen', people: '21.6M', funding: '$2.3B' },
  { country: 'Syria', people: '14.6M', funding: '$3.6B' },
  { country: 'DR Congo', people: '26.4M', funding: '$1.9B' },
];

const Template = ({ striped, responsive }) => {
  const classes = [
    'cd-table',
    striped ? 'cd-table--striped' : '',
    responsive ? 'cd-table--responsive' : '',
  ].filter(Boolean).join(' ');

  const rows = sampleRows.map(r => `
    <tr>
      <td${responsive ? ' data-content="Country"' : ''}>${r.country}</td>
      <td${responsive ? ' data-content="People in need"' : ''}>${r.people}</td>
      <td${responsive ? ' data-content="Funding required"' : ''}>${r.funding}</td>
    </tr>
  `).join('');

  return `
    <table class="${classes}">
      <caption>Humanitarian needs overview 2024</caption>
      <thead>
        <tr>
          <th>Country</th>
          <th>People in need</th>
          <th>Funding required</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
};

export const Default = Template.bind({});
Default.args = { striped: false, responsive: false };

export const Striped = Template.bind({});
Striped.args = { striped: true, responsive: false };

export const Responsive = Template.bind({});
Responsive.args = { striped: false, responsive: true };

export const AllVariants = () => `
  <h3 style="margin-bottom: 0.5rem;">Default table</h3>
  <table class="cd-table">
    <thead><tr><th>Country</th><th>People in need</th><th>Funding</th></tr></thead>
    <tbody>
      <tr><td>Afghanistan</td><td>24.4M</td><td>$1.1B</td></tr>
      <tr><td>Yemen</td><td>21.6M</td><td>$2.3B</td></tr>
      <tr><td>Syria</td><td>14.6M</td><td>$3.6B</td></tr>
    </tbody>
  </table>

  <h3 style="margin-bottom: 0.5rem;">Striped table</h3>
  <table class="cd-table cd-table--striped">
    <thead><tr><th>Country</th><th>People in need</th><th>Funding</th></tr></thead>
    <tbody>
      <tr><td>Afghanistan</td><td>24.4M</td><td>$1.1B</td></tr>
      <tr><td>Yemen</td><td>21.6M</td><td>$2.3B</td></tr>
      <tr><td>Syria</td><td>14.6M</td><td>$3.6B</td></tr>
      <tr><td>DR Congo</td><td>26.4M</td><td>$1.9B</td></tr>
    </tbody>
  </table>

  <h3 style="margin-bottom: 0.5rem;">Table with caption and footer</h3>
  <table class="cd-table cd-table--striped">
    <caption>Funding summary (USD)</caption>
    <thead><tr><th>Cluster</th><th>Required</th><th>Received</th></tr></thead>
    <tbody>
      <tr><td>Health</td><td>$500M</td><td>$210M</td></tr>
      <tr><td>WASH</td><td>$320M</td><td>$140M</td></tr>
      <tr><td>Education</td><td>$280M</td><td>$95M</td></tr>
    </tbody>
    <tfoot><tr><td>Total</td><td>$1.1B</td><td>$445M</td></tr></tfoot>
  </table>
`;
