import './cd-alert.css';

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Alert message text' },
    variant: {
      control: 'select',
      options: ['info', 'error', 'warning', 'status'],
      description: 'Alert type',
    },
  },
};

const Template = ({ message, variant }) => {
  const variantClass = variant !== 'info' ? ` cd-alert--${variant}` : '';
  const roleMap = { info: 'status', error: 'alert', warning: 'alert', status: 'status' };

  return `
    <div class="cd-alert${variantClass}">
      <div role="${roleMap[variant]}">
        <div class="cd-alert__message">
          <p>${message}</p>
        </div>
      </div>
    </div>
  `;
};

export const Info = Template.bind({});
Info.args = { message: 'This is an informational message about the current operation.', variant: 'info' };

export const Error = Template.bind({});
Error.args = { message: 'An error occurred while processing your request. Please try again.', variant: 'error' };

export const Warning = Template.bind({});
Warning.args = { message: 'Please review the data before submitting. Some fields may need attention.', variant: 'warning' };

export const Status = Template.bind({});
Status.args = { message: 'Your changes have been saved successfully.', variant: 'status' };

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 0;">
    <div class="cd-alert">
      <div role="status">
        <div class="cd-alert__message"><p><strong>Info:</strong> This is an informational message.</p></div>
      </div>
    </div>
    <div class="cd-alert cd-alert--error">
      <div role="alert">
        <div class="cd-alert__message"><p><strong>Error:</strong> Something went wrong.</p></div>
      </div>
    </div>
    <div class="cd-alert cd-alert--warning">
      <div role="alert">
        <div class="cd-alert__message"><p><strong>Warning:</strong> Please review before continuing.</p></div>
      </div>
    </div>
    <div class="cd-alert cd-alert--status">
      <div role="status">
        <div class="cd-alert__message"><p><strong>Success:</strong> Changes saved successfully.</p></div>
      </div>
    </div>
  </div>
`;
