import FiltersView from './view/filters-view.js';
import MenuNavView from './view/menu-nav-view.js';
import {render} from './render.js';
import ContentPresenter from './presenter/content-presenter.js';

const siteHeaderFilterElement = document.querySelector('.trip-controls__filters');
const siteHeaderMenuElement = document.querySelector('.trip-controls__navigation');
const siteTripEventsElement = document.querySelector('.trip-events');
const siteRouteWrapperElement = document.querySelector('.trip-main');
const contentPresenter = new ContentPresenter({
  tripEventsContainer: siteTripEventsElement,
  routeContainer: siteRouteWrapperElement
});

render(new MenuNavView(), siteHeaderMenuElement);
render(new FiltersView(), siteHeaderFilterElement);

contentPresenter.init();
