import './cd-footer.css';

export default {
  title: 'Composites/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Site-wide footer with OCHA mandate, legal links, social icons and copyright. Brand primary blue background, white type. Stacks vertically below 1024px.',
      },
    },
  },
};

const social = (label, path) => `
  <li class="cd-footer-social__item">
    <a href="#" class="cd-footer-social__link" aria-label="${label}">
      <svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>
    </a>
  </li>`;

const socialLinks = `
  <ul class="cd-footer-social__list">
    ${social('Twitter / X', '<path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.8 22H2l7.04-8.04L2 2h6.91l4.29 5.7L18.244 2Zm-1.19 18h1.6L7.05 4H5.34l11.71 16Z"/>')}
    ${social('Facebook', '<path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/>')}
    ${social('LinkedIn', '<path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.5H5.67v7.84h2.67ZM7 9.32a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.02v-4.42c0-2.5-1.34-3.66-3.13-3.66-1.45 0-2.1.8-2.46 1.36V10.5h-2.67c.04.76 0 7.84 0 7.84h2.67v-4.38c0-.24.02-.48.09-.65.19-.48.63-.98 1.36-.98.96 0 1.34.73 1.34 1.8v4.21h2.8Z"/>')}
    ${social('YouTube', '<path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41a2.51 2.51 0 0 0-1.77 1.78A26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.78C5.75 19 12 19 12 19s6.25 0 7.81-.41a2.51 2.51 0 0 0 1.77-1.78A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15V9l5.2 3-5.2 3Z"/>')}
    ${social('Instagram', '<path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.84 5.84 0 0 0-2.13 1.38A5.84 5.84 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.84 5.84 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.84 5.84 0 0 0 2.13-1.38 5.84 5.84 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.84 5.84 0 0 0-1.38-2.13A5.84 5.84 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/>')}
  </ul>`;

const mandate = `
  <div class="cd-mandate">
    <span class="cd-mandate__heading">Provided by</span>
    <img class="cd-mandate__logo" src="ocha-logo-white.svg" alt="OCHA" />
    <p class="cd-mandate__text">
      OCHA coordinates the global emergency response to save lives and protect people in
      humanitarian crises. We advocate for effective and principled humanitarian action by
      all, for all.
    </p>
  </div>`;

const copyright = `
  <div class="cd-footer-copyright">
    <a href="https://www.unocha.org" class="cd-footer-copyright__link" aria-label="OCHA home">
      <img class="cd-footer-copyright__logo" src="ocha-logo-white.svg" alt="OCHA" />
    </a>
    <p class="cd-footer-copyright__text">
      OCHA &copy; ${new Date().getFullYear()}<br />
      <a href="#">unocha.org</a>
    </p>
  </div>`;

const legalMenu = (extra = false) => `
  <ul class="cd-footer-menu">
    <li class="cd-footer-menu__item"><a href="#">About</a></li>
    <li class="cd-footer-menu__item"><a href="#">Privacy policy</a></li>
    <li class="cd-footer-menu__item"><a href="#">Terms of use</a></li>
    <li class="cd-footer-menu__item"><a href="#">Copyright</a></li>
    <li class="cd-footer-menu__item"><a href="#">Contact</a></li>
    ${extra ? '<li class="cd-footer-menu__item"><a href="#">Report fraud</a></li><li class="cd-footer-menu__item"><a href="#">Scam alert</a></li>' : ''}
  </ul>`;

export const Default = () => `
  <footer class="cd-footer">
    <div class="cd-footer__inner">
      <div class="cd-footer__section cd-footer__section--menu">
        <nav aria-label="Footer">${legalMenu()}</nav>
      </div>
      <div class="cd-footer__section cd-footer__section--social">
        <h2 class="cd-footer-social__heading">Follow us</h2>
        ${socialLinks}
      </div>
      <div class="cd-footer__section cd-footer__section--mandate">${mandate}</div>
      <div class="cd-footer__section cd-footer__section--copyright">${copyright}</div>
    </div>
  </footer>
`;

export const WithAllOchaLegalLinks = () => `
  <footer class="cd-footer">
    <div class="cd-footer__inner">
      <div class="cd-footer__section cd-footer__section--menu">
        <nav aria-label="Footer">
          <ul class="cd-footer-menu">
            <li class="cd-footer-menu__item"><a href="https://www.unocha.org/about-us">About</a></li>
            <li class="cd-footer-menu__item"><a href="https://www.un.org/en/about-us/privacy-notice">Privacy notice</a></li>
            <li class="cd-footer-menu__item"><a href="https://www.un.org/en/about-us/terms-of-use">Terms of use</a></li>
            <li class="cd-footer-menu__item"><a href="https://www.un.org/en/about-us/copyright">Copyright</a></li>
            <li class="cd-footer-menu__item"><a href="https://www.unocha.org/contact-us">Contact</a></li>
            <li class="cd-footer-menu__item"><a href="https://oios.un.org/report-fraud">Fraud hotline</a></li>
            <li class="cd-footer-menu__item"><a href="https://www.un.org/en/about-us/fraud-alert">Scam alert</a></li>
          </ul>
        </nav>
      </div>
      <div class="cd-footer__section cd-footer__section--social">
        <h2 class="cd-footer-social__heading">Follow OCHA</h2>
        ${socialLinks}
      </div>
      <div class="cd-footer__section cd-footer__section--mandate">${mandate}</div>
      <div class="cd-footer__section cd-footer__section--copyright">${copyright}</div>
    </div>
  </footer>
`;

export const Minimal = () => `
  <footer class="cd-footer">
    <div class="cd-footer__inner">
      <div class="cd-footer__section cd-footer__section--copyright" style="flex: 1 0 100%; text-align: center;">
        ${copyright}
      </div>
    </div>
  </footer>
`;
