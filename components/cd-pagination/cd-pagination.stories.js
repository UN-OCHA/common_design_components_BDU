import './cd-pagination.css';

export default {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Currently active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Total number of pages',
    },
  },
};

const Template = ({ currentPage, totalPages }) => {
  const items = [];
  if (currentPage > 1) {
    items.push(`<li class="cd-pager__item"><a href="#">&laquo; Previous</a></li>`);
  }
  for (let i = 1; i <= totalPages; i++) {
    const active = i === currentPage ? ' is-active' : '';
    items.push(`<li class="cd-pager__item${active}"><a href="#">${i}</a></li>`);
  }
  if (currentPage < totalPages) {
    items.push(`<li class="cd-pager__item"><a href="#">Next &raquo;</a></li>`);
  }

  return `
    <nav aria-label="Pagination">
      <ul class="cd-pager__items">${items.join('')}</ul>
    </nav>
  `;
};

export const Default = Template.bind({});
Default.args = { currentPage: 1, totalPages: 5 };

export const MiddlePage = Template.bind({});
MiddlePage.args = { currentPage: 3, totalPages: 5 };

export const LastPage = Template.bind({});
LastPage.args = { currentPage: 5, totalPages: 5 };

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem;">

    <div>
      <h3 style="margin-bottom: 0.5rem;">First page active</h3>
      <nav aria-label="Pagination">
        <ul class="cd-pager__items">
          <li class="cd-pager__item is-active"><a href="#">1</a></li>
          <li class="cd-pager__item"><a href="#">2</a></li>
          <li class="cd-pager__item"><a href="#">3</a></li>
          <li class="cd-pager__item"><a href="#">4</a></li>
          <li class="cd-pager__item"><a href="#">5</a></li>
          <li class="cd-pager__item"><a href="#">Next &raquo;</a></li>
        </ul>
      </nav>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Middle page active</h3>
      <nav aria-label="Pagination">
        <ul class="cd-pager__items">
          <li class="cd-pager__item"><a href="#">&laquo; Previous</a></li>
          <li class="cd-pager__item"><a href="#">1</a></li>
          <li class="cd-pager__item"><a href="#">2</a></li>
          <li class="cd-pager__item is-active"><a href="#">3</a></li>
          <li class="cd-pager__item"><a href="#">4</a></li>
          <li class="cd-pager__item"><a href="#">5</a></li>
          <li class="cd-pager__item"><a href="#">Next &raquo;</a></li>
        </ul>
      </nav>
    </div>

    <div>
      <h3 style="margin-bottom: 0.5rem;">Last page active</h3>
      <nav aria-label="Pagination">
        <ul class="cd-pager__items">
          <li class="cd-pager__item"><a href="#">&laquo; Previous</a></li>
          <li class="cd-pager__item"><a href="#">1</a></li>
          <li class="cd-pager__item"><a href="#">2</a></li>
          <li class="cd-pager__item"><a href="#">3</a></li>
          <li class="cd-pager__item"><a href="#">4</a></li>
          <li class="cd-pager__item is-active"><a href="#">5</a></li>
        </ul>
      </nav>
    </div>

  </div>
`;
