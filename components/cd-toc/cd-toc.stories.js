import './cd-toc.css';

export default {
  title: 'Components/Table of Contents',
  tags: ['autodocs'],
};

export const Default = () => `
  <nav class="cd-toc" aria-label="Table of contents">
    <h2 class="cd-toc__title">Contents</h2>
    <ol class="cd-toc__list">
      <li><a href="#section-1">Introduction</a></li>
      <li><a href="#section-2">Context and background</a></li>
      <li><a href="#section-3">Key findings</a></li>
      <li><a href="#section-4">Recommendations</a></li>
      <li><a href="#section-5">Conclusion</a></li>
    </ol>
  </nav>
`;

export const RomanNumerals = () => `
  <nav class="cd-toc" aria-label="Table of contents">
    <h2 class="cd-toc__title">Contents</h2>
    <ol class="cd-toc__list cd-toc__list--roman">
      <li><a href="#section-1">Preamble</a></li>
      <li><a href="#section-2">Principles</a></li>
      <li><a href="#section-3">Articles</a></li>
    </ol>
  </nav>
`;

export const MultiColumn = () => `
  <nav class="cd-toc cd-toc--with-cols" aria-label="Table of contents">
    <h2 class="cd-toc__title">Contents</h2>
    <ol class="cd-toc__list">
      <li><a href="#s1">Chapter one</a></li>
      <li><a href="#s2">Chapter two</a></li>
      <li><a href="#s3">Chapter three</a></li>
      <li><a href="#s4">Chapter four</a></li>
      <li><a href="#s5">Chapter five</a></li>
      <li><a href="#s6">Chapter six</a></li>
      <li><a href="#s7">Chapter seven</a></li>
      <li><a href="#s8">Chapter eight</a></li>
    </ol>
  </nav>
`;
