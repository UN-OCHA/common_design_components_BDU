import './cd-tag.css';

export default {
  title: 'Components/Tag',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'],
    },
    size: { control: 'select', options: ['default', 'large', 'xl'] },
    rounded: { control: 'boolean' },
  },
};

const cls = (v) => (v && v !== 'default') ? ` cd-tag--${v}` : '';

const Template = ({ label, variant, size, rounded }) => `
  <div class="cd-tag${cls(variant)}${cls(size)}${rounded ? ' cd-tag--rounded' : ''}">${label}</div>
`;

export const Default = Template.bind({});
Default.args = { label: 'Default', variant: 'default', size: 'default', rounded: false };

export const Rounded = Template.bind({});
Rounded.args = { label: 'Rounded', variant: 'color-1', size: 'default', rounded: true };

export const Large = Template.bind({});
Large.args = { label: 'Large', variant: 'color-6', size: 'large', rounded: false };

export const Linked = () => `
  <div class="cd-tag cd-tag--linked cd-tag--rounded"><a href="#">Linked</a></div>
`;

export const AllVariants = () => `
  <div class="cd-tags" style="font-size: 1rem;">
    <div class="cd-tag">Default</div>
    <div class="cd-tag cd-tag--color-1">Color 1</div>
    <div class="cd-tag cd-tag--color-2">Color 2</div>
    <div class="cd-tag cd-tag--color-3">Color 3</div>
    <div class="cd-tag cd-tag--color-4">Color 4</div>
    <div class="cd-tag cd-tag--color-5">Color 5</div>
    <div class="cd-tag cd-tag--color-6">Color 6</div>
    <div class="cd-tag cd-tag--rounded cd-tag--color-4">Rounded</div>
    <div class="cd-tag cd-tag--large cd-tag--color-6">Large</div>
    <div class="cd-tag cd-tag--xl cd-tag--color-5">XL</div>
  </div>
`;
