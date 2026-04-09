import './cd-typography.css';

export default {
  title: 'Components/Typography',
  tags: ['autodocs'],
};

export const Headings = () => `
  <div class="cd-max-width">
    <h1>Heading 1 &mdash; Global Humanitarian Overview</h1>
    <h2>Heading 2 &mdash; Regional summary</h2>
    <h3>Heading 3 &mdash; Country profile</h3>
    <h4>Heading 4 &mdash; Cluster breakdown</h4>
    <h5>Heading 5 &mdash; Sub-section</h5>
    <h6>Heading 6 &mdash; Detail</h6>
  </div>
`;

export const BodyText = () => `
  <div class="cd-max-width">
    <p>Humanitarian needs continue to grow worldwide. An estimated 300 million people require humanitarian assistance and protection. The international community is working together to address these needs across multiple sectors including health, nutrition, shelter, and education.</p>
    <p>Coordination remains essential to an effective response. OCHA plays a central role in bringing together humanitarian actors to ensure a coherent and timely response to emergencies.</p>
  </div>
`;

export const Blockquote = () => `
  <div class="cd-max-width">
    <blockquote>
      Humanitarian action is about reaching people in need, wherever they are, and providing them with the assistance they need to survive and recover.
    </blockquote>
  </div>
`;

export const DescriptionList = () => `
  <div class="cd-max-width">
    <dl>
      <dt>People in need</dt>
      <dd>300 million across 69 countries</dd>
      <dt>People targeted</dt>
      <dd>180 million people planned for assistance</dd>
      <dt>Funding required</dt>
      <dd>US$46.4 billion for coordinated response plans</dd>
      <dt>Response plans</dt>
      <dd>31 Humanitarian Response Plans and 3 Regional Plans</dd>
    </dl>
  </div>
`;

export const AllVariants = () => `
  <div class="cd-max-width" style="display: flex; flex-direction: column; gap: 2rem;">

    <section>
      <h2>Headings</h2>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </section>

    <hr>

    <section>
      <h2>Body text</h2>
      <p>Humanitarian needs continue to grow. An estimated 300 million people require humanitarian assistance and protection across 69 countries and territories.</p>
    </section>

    <hr>

    <section>
      <h2>Blockquote</h2>
      <blockquote>Coordination remains essential to an effective response.</blockquote>
    </section>

    <hr>

    <section>
      <h2>Description list</h2>
      <dl>
        <dt>People in need</dt>
        <dd>300 million</dd>
        <dt>Funding required</dt>
        <dd>US$46.4 billion</dd>
      </dl>
    </section>

  </div>
`;
