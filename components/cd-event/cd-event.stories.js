import '../cd-card/cd-card.css';
import '../cd-date/cd-date.css';
import '../cd-read-more/cd-read-more.css';
import './cd-event.css';

export default {
  title: 'Components/Event',
  tags: ['autodocs'],
};

const eventCard = ({ day, month, year, title, location, time, description }) => `
  <article class="cd-card">
    <div class="cd-card__date--event">
      <div class="cd-date">
        <div class="cd-date__wrapper">
          <span class="cd-date__day">${day}</span>
        </div>
        <div class="cd-date__wrapper">
          <span class="cd-date__month">${month}</span>
          <span class="cd-date__year">${year}</span>
        </div>
      </div>
    </div>
    <div class="cd-card__container">
      <div class="cd-card__title"><h3><a href="#" rel="bookmark">${title}</a></h3></div>
      ${location ? `<div class="cd-card__location">${location}</div>` : ''}
      ${time ? `<div class="cd-card__time">${time}</div>` : ''}
      <div class="cd-card__description"><p>${description}</p></div>
    </div>
    <div class="cd-card__footer">
      <a href="#" class="cd-card__link cd-read-more">Learn more</a>
    </div>
  </article>
`;

export const Default = () => eventCard({
  day: '20',
  month: 'Sep',
  year: '2026',
  title: 'Humanitarian Coordination Forum',
  location: 'Geneva, Switzerland',
  time: '16:00 to 17:00',
  description: 'Partners and donors gather to coordinate response activities for the coming quarter.',
});

export const MultiDay = () => eventCard({
  day: '18-20',
  month: 'Jun',
  year: '2026',
  title: 'Regional Needs Assessment Workshop',
  description: 'Three-day workshop reviewing needs assessments across the region.',
});

export const Grid = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem;">
    ${eventCard({ day: '20', month: 'Sep', year: '2026', title: 'Coordination Forum', location: 'Geneva', time: '16:00 to 17:00', description: 'Partners coordinate response activities.' })}
    ${eventCard({ day: '30', month: 'Jul', year: '2026', title: 'Donor Briefing', location: 'New York', time: '10:00', description: 'Quarterly briefing for Member States.' })}
    ${eventCard({ day: '18-20', month: 'Jun', year: '2026', title: 'Needs Assessment Workshop', description: 'Three-day regional workshop.' })}
  </div>
`;
