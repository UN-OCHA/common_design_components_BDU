import './cd-facets.css';

export default {
  title: 'Components/Facets',
  tags: ['autodocs'],
};

export const LinkFacets = () => `
  <div class="block-facets block-facet--links" style="max-width: 260px;">
    <h3>Theme</h3>
    <ul>
      <li class="facet-item"><a href="#">Health <span class="facet-item__count">(12)</span></a></li>
      <li class="facet-item"><a href="#" class="is-active">Food security <span class="facet-item__count">(8)</span></a></li>
      <li class="facet-item"><a href="#">Protection <span class="facet-item__count">(5)</span></a></li>
      <li class="facet-item"><a href="#">Shelter <span class="facet-item__count">(3)</span></a></li>
    </ul>
  </div>
`;

export const CheckboxFacets = () => `
  <div class="block-facets">
    <h3>Country</h3>
    <ul class="item-list__checkbox">
      <li class="facet-item"><label><input type="checkbox"> Afghanistan (42)</label></li>
      <li class="facet-item"><label><input type="checkbox" checked> Ethiopia (31)</label></li>
      <li class="facet-item"><label><input type="checkbox"> Myanmar (20)</label></li>
      <li class="facet-item"><label><input type="checkbox"> Sudan (18)</label></li>
    </ul>
  </div>
`;

export const Summary = () => `
  <div class="block-facets-summary">
    <h2>Active filters</h2>
    <ul>
      <li><span class="facet-item__value">Ethiopia</span></li>
      <li><span class="facet-item__value">Food security</span></li>
      <li><a href="#" class="facet-summary-item--clear">Clear all filters</a></li>
    </ul>
  </div>
`;
