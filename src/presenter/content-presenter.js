import TripEventsListView from '../view/trip-events-list-view.js';
import RouteWrapperView from '../view/route-wrapper-view.js';
import RouteInfoView from '../view/route-info-view.js';
import RouteCostView from '../view/route-cost-view.js';
import SortingView from '../view/sorting-view.js';
import EditFormView from '../view/edit-form-view.js';
import WaypointView from '../view/waypoint-view.js';
import NoPointsView from '../view/no-points-view.js';
import {RenderPosition, render} from '../render.js';

export default class ContentPresenter {
  #tripEventsContainer = null;
  #routeContainer = null;
  #pointsModel = null;

  #tripEventsListComponent = new TripEventsListView();
  #routeWrapperComponent = new RouteWrapperView();

  #points = [];

  constructor({tripEventsContainer, routeContainer, pointsModel}) {
    this.#tripEventsContainer = tripEventsContainer;
    this.#routeContainer = routeContainer;
    this.#pointsModel = pointsModel;
  }

  #renderWaypoint(point) {
    const waypointComponent = new WaypointView({point});
    const waypointEditComponent = new EditFormView({point});

    const replacePointToForm = () => {
      this.#tripEventsListComponent.element.replaceChild(waypointEditComponent.element, waypointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#tripEventsListComponent.element.replaceChild(waypointComponent.element, waypointEditComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    waypointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    waypointEditComponent.element.addEventListener('submit', (event) => {
      event.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    waypointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render(waypointComponent, this.#tripEventsListComponent.element);
  }

  #renderEventList() {
    render(this.#routeWrapperComponent, this.#routeContainer, RenderPosition.AFTERBEGIN);
    render(new RouteInfoView(), this.#routeWrapperComponent.element);
    render(new RouteCostView(), this.#routeWrapperComponent.element);

    if (this.#points.length <= 0) {
      render(new NoPointsView(), this.#tripEventsContainer);
      return;
    }

    render(new SortingView(), this.#tripEventsContainer);
    render(this.#tripEventsListComponent, this.#tripEventsContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderWaypoint(this.#points[i]);
    }
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderEventList();
  }
}
