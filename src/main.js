import FiltersView from './view/filters-view.js';
import MenuNavView from './view/menu-nav-view.js';
import {render} from './render.js';

const siteHeaderFilterElement = document.querySelector('.trip-controls__filters');
const siteHeaderMenuElement = document.querySelector('.trip-controls__navigation');

render(new MenuNavView(), siteHeaderMenuElement);
render(new FiltersView(), siteHeaderFilterElement)

