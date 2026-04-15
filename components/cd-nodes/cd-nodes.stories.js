import './cd-nodes.css';

export default {
  title: 'Components/Nodes',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Editorial styling for CMS nodes. The unpublished flag is visible to editors to signal that content is not yet live.',
      },
    },
  },
};

export const Unpublished = () => `
  <div style="max-width: 600px; margin: 2rem;">
    <article class="cd-node--unpublished">
      <h3>Draft: Monthly situation report</h3>
      <p>This content is unpublished. It will not be visible to site visitors until an editor publishes it.</p>
    </article>
  </div>
`;
