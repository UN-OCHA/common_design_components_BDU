import './cd-form.css';

export default {
  title: 'Components/Form',
  tags: ['autodocs'],
};

export const TextInputs = () => `
  <form class="cd-form" onsubmit="return false">
    <div class="cd-form__item">
      <label for="name">Full name</label>
      <input type="text" id="name" placeholder="Enter your name">
    </div>
    <div class="cd-form__item" style="margin-top: 1.5rem;">
      <label for="email">Email address</label>
      <input type="email" id="email" placeholder="name@example.org">
      <div class="cd-form__description">We will use this to contact you.</div>
    </div>
    <div class="cd-form__item" style="margin-top: 1.5rem;">
      <label for="msg">Message</label>
      <textarea id="msg" rows="4" placeholder="Your message"></textarea>
    </div>
  </form>
`;

export const SelectAndDate = () => `
  <form class="cd-form" onsubmit="return false">
    <div class="cd-form__item">
      <label for="country">Country</label>
      <select id="country">
        <option value="">-- Select --</option>
        <option>Afghanistan</option>
        <option>Yemen</option>
        <option>Syria</option>
        <option>DR Congo</option>
      </select>
    </div>
    <div class="cd-form__item" style="margin-top: 1.5rem;">
      <label for="date">Report date</label>
      <input type="date" id="date">
    </div>
  </form>
`;

export const InlineForm = () => `
  <form class="cd-form cd-form--inline" onsubmit="return false">
    <div class="cd-form__item">
      <label for="search-inline">Search</label>
      <input type="search" id="search-inline" placeholder="Keywords...">
    </div>
  </form>
`;

export const ErrorState = () => `
  <form class="cd-form" onsubmit="return false">
    <div class="cd-form__item">
      <label for="err-email">Email address</label>
      <input type="email" id="err-email" class="error" value="not-an-email">
      <div class="cd-form__description" style="color: var(--brand-error);">Please enter a valid email address.</div>
    </div>
  </form>
`;

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 2.5rem; max-width: 600px;">

    <div>
      <h3 style="margin-bottom: 0.5rem;">Text inputs</h3>
      <form class="cd-form" onsubmit="return false">
        <div class="cd-form__item">
          <label for="av-name">Full name</label>
          <input type="text" id="av-name" placeholder="Enter your name">
        </div>
        <div class="cd-form__item" style="margin-top: 1rem;">
          <label for="av-email">Email</label>
          <input type="email" id="av-email" placeholder="name@example.org">
        </div>
        <div class="cd-form__item" style="margin-top: 1rem;">
          <label for="av-msg">Message</label>
          <textarea id="av-msg" rows="3"></textarea>
        </div>
      </form>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Select &amp; date</h3>
      <form class="cd-form" onsubmit="return false">
        <div class="cd-form__item">
          <label for="av-sel">Country</label>
          <select id="av-sel"><option>Afghanistan</option><option>Yemen</option></select>
        </div>
        <div class="cd-form__item" style="margin-top: 1rem;">
          <label for="av-date">Date</label>
          <input type="date" id="av-date">
        </div>
      </form>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Inline</h3>
      <form class="cd-form cd-form--inline" onsubmit="return false">
        <div class="cd-form__item">
          <label for="av-inline">Filter</label>
          <input type="search" id="av-inline" placeholder="Keywords...">
        </div>
      </form>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Error state</h3>
      <form class="cd-form" onsubmit="return false">
        <div class="cd-form__item">
          <label for="av-err">Email</label>
          <input type="email" id="av-err" class="error" value="invalid">
          <div class="cd-form__description" style="color: var(--brand-error);">Please enter a valid email.</div>
        </div>
      </form>
    </div>

  </div>
`;
