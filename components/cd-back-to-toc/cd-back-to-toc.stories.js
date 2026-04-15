import './cd-back-to-toc.css';
import '../cd-button/cd-button.css';

export default {
  title: 'Components/Back to TOC',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Link text' },
    href: { control: 'text', description: 'Target anchor (usually #cd-component-toc)' },
  },
};

const Template = ({ label, href }) => `
  <div class="cd-back-to-toc">
    <a href="${href}" class="cd-button cd-button--bold cd-button--uppercase cd-button--small cd-button--icon">
      <span class="cd-button__text">${label}</span>
      <svg class="cd-icon cd-icon--arrow-up" aria-hidden="true" focusable="false" width="16" height="16">
        <use xlink:href="/cd-icons-sprite.svg#cd-icon--arrow-up"></use>
      </svg>
    </a>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'TOC',
  href: '#cd-component-toc',
};
