import './cd-dropbutton.css';

export default {
  title: 'Components/Dropbutton',
  tags: ['autodocs'],
};

const Template = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'cd-dropbutton';
  wrapper.innerHTML = `
    <button type="button" class="cd-dropbutton__primary">Edit</button>
    <button type="button" class="cd-dropbutton__toggle" aria-expanded="false" aria-label="More actions">▾</button>
    <ul class="cd-dropbutton__menu">
      <li><button type="button">Duplicate</button></li>
      <li><button type="button">Archive</button></li>
      <li><button type="button">Delete</button></li>
    </ul>
  `;
  const toggle = wrapper.querySelector('.cd-dropbutton__toggle');
  toggle.addEventListener('click', () => {
    const open = wrapper.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  return wrapper;
};

export const Default = Template.bind({});
