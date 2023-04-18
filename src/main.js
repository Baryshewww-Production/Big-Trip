import FiltersView from './view/filters-view.js';
import MenuNavView from './view/menu-nav-view.js';
import {render} from './render.js';
import ContentPresenter from './presenter/content-presenter.js';
import PointsModel from './model/ponts-model.js';

const siteHeaderFilterElement = document.querySelector('.trip-controls__filters');
const siteHeaderMenuElement = document.querySelector('.trip-controls__navigation');
const siteTripEventsElement = document.querySelector('.trip-events');
const siteRouteWrapperElement = document.querySelector('.trip-main');
const pointsModel = new PointsModel();
const contentPresenter = new ContentPresenter({
  tripEventsContainer: siteTripEventsElement,
  routeContainer: siteRouteWrapperElement,
  pointsModel,
});

render(new MenuNavView(), siteHeaderMenuElement);
render(new FiltersView(), siteHeaderFilterElement);

contentPresenter.init();
