import './cd-flow.css';

export default {
  title: 'Utilities/Flow',
  tags: ['autodocs'],
};

export const Default = () => `
  <div class="cd-flow" style="border:1px dashed var(--brand-grey--border); padding:1rem;">
    <h2 style="margin:0;">Flow utility</h2>
    <p style="margin:0;">Every direct child after the first gets a top margin of <code>--cd-flow-space</code> (default 1rem).</p>
    <p style="margin:0;">This keeps vertical rhythm consistent without having to style every element individually.</p>
    <ul style="margin:0; padding-left:1.25rem;">
      <li>List item</li>
      <li>Another item</li>
    </ul>
  </div>
`;

export const CustomSpace = () => `
  <div class="cd-flow" style="--cd-flow-space: 2rem; border:1px dashed var(--brand-grey--border); padding:1rem;">
    <h2 style="margin:0;">Larger flow space</h2>
    <p style="margin:0;">Override <code>--cd-flow-space</code> locally for a looser rhythm.</p>
    <p style="margin:0;">Each paragraph now sits 2rem below its sibling.</p>
  </div>
`;

export const Bumper = () => `
  <div class="cd-bumper" style="display:flex; border:1px dashed var(--brand-grey--border); padding:1rem;">
    <span>First</span>
    <span>Second</span>
    <span>Third</span>
  </div>
`;
