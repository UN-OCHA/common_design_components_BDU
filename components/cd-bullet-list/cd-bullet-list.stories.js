import './cd-bullet-list.css';

export default {
  title: 'Components/Bullet List',
  tags: ['autodocs'],
};

export const Default = () => `
  <ul class="cd-bullet-list">
    <li><a href="#">Sed dapibus lectus sit amet adipiscing egestas mauris est viverra nibh</a></li>
    <li>Sed dapibus lectus sit amet</li>
    <li><a href="#">Adipiscing egestas mauris est viverra nibh</a></li>
  </ul>
`;

export const WithIcons = () => `
  <ul class="cd-bullet-list cd-bullet-list--icon">
    <li>
      <a href="#">
        <svg viewBox="0 0 48 48" aria-hidden="true" class="cd-icon cd-icon--arrow-right">
          <path d="M14,48a4,4,0,0,1-2.83-6.83L28.34,24,11.17,6.83a4,4,0,0,1,5.66-5.66l20,20a4,4,0,0,1,0,5.66l-20,20A4,4,0,0,1,14,48Z"/>
        </svg>
        Sed dapibus lectus sit amet adipiscing egestas mauris
      </a>
    </li>
    <li>
      <svg viewBox="0 0 48 48" aria-hidden="true" class="cd-icon cd-icon--arrow-right">
        <path d="M14,48a4,4,0,0,1-2.83-6.83L28.34,24,11.17,6.83a4,4,0,0,1,5.66-5.66l20,20a4,4,0,0,1,0,5.66l-20,20A4,4,0,0,1,14,48Z"/>
      </svg>
      Sed dapibus lectus sit amet
    </li>
  </ul>
`;
