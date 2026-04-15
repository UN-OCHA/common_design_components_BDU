import './cd-social-links.css';
import { initSocialLinks } from './cd-social-links.js';

export default {
  title: 'Components/Social Links',
  tags: ['autodocs'],
};

const linksHtml = ({ shareUrl, withPdf } = {}) => `
  <footer class="cd-social-links">
    <div class="cd-social-links__wrapper">
      <span class="cd-social-links__label">Share</span>
      <ul class="cd-social-links__list" role="list">
        <li class="cd-social-links__item">
          <a class="cd-social-links__link" target="_blank" rel="noopener"
             href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}">
            <span class="visually-hidden">Share on Facebook</span>
            <svg aria-hidden="true" focusable="false"><use href="/cd-icons-sprite.svg#cd-icon--social-links--facebook"></use></svg>
          </a>
        </li>
        <li class="cd-social-links__item">
          <a class="cd-social-links__link" target="_blank" rel="noopener"
             href="https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}">
            <span class="visually-hidden">Share on Twitter</span>
            <svg aria-hidden="true" focusable="false"><use href="/cd-icons-sprite.svg#cd-icon--social-links--twitter"></use></svg>
          </a>
        </li>
        <li class="cd-social-links__item">
          <a class="cd-social-links__link" target="_blank" rel="noopener"
             href="https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}">
            <span class="visually-hidden">Share on LinkedIn</span>
            <svg aria-hidden="true" focusable="false"><use href="/cd-icons-sprite.svg#cd-icon--social-links--linkedin"></use></svg>
          </a>
        </li>
        <li class="cd-social-links__item">
          <button class="cd-social-links__button cd-social-links__button--copy"
                  data-url="${shareUrl}" data-message="URL copied to clipboard">
            <span class="visually-hidden">Copy URL to clipboard</span>
            <svg aria-hidden="true" focusable="false"><use href="/cd-icons-sprite.svg#cd-icon--copyurl"></use></svg>
          </button>
          <div role="status" class="cd-social-links__status"></div>
        </li>
        ${withPdf ? `
        <li class="cd-social-links__item">
          <a class="cd-social-links__link cd-social-links__link--pdf" href="#">
            <span class="visually-hidden">Download PDF</span>
            <svg aria-hidden="true" focusable="false"><use href="/cd-icons-sprite.svg#cd-icon--pdf"></use></svg>
          </a>
        </li>` : ''}
      </ul>
    </div>
  </footer>
`;

const Template = (args) => {
  const wrapper = document.createElement('div');
  wrapper.style.padding = '3rem 2rem';
  wrapper.innerHTML = linksHtml(args);
  // Wire up the copy button.
  setTimeout(() => initSocialLinks(wrapper), 0);
  return wrapper;
};

export const Default = Template.bind({});
Default.args = { shareUrl: 'https://example.org/report', withPdf: false };

export const WithPdf = Template.bind({});
WithPdf.args = { shareUrl: 'https://example.org/report', withPdf: true };
