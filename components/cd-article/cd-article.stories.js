import './cd-article.css';

export default {
  title: 'Components/Article',
  tags: ['autodocs'],
};

export const Default = () => `
  <article class="cd-article">
    <h1 class="cd-article__page-title">An article title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus lectus sit amet adipiscing egestas mauris est viverra nibh.</p>
    <p>Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus. Cras molestie risus a enim convallis vitae luctus libero lacinia.</p>
  </article>
`;

export const WithSubheadings = () => `
  <article class="cd-article">
    <h1 class="cd-article__page-title">Humanitarian response overview</h1>
    <p>An introduction paragraph sets the context for the article and gives the reader a sense of what follows.</p>
    <h2>Background</h2>
    <p>Further context and background information to frame the topic.</p>
    <h2>Key findings</h2>
    <p>The main points, observations, or findings surfaced by the article.</p>
  </article>
`;
