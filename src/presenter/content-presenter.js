import TripEventsListView from '../view/trip-events-list-view.js';
import RouteWrapperView from '../view/route-wrapper-view.js';
import RouteInfoView from '../view/route-info-view.js';
import RouteCostView from '../view/route-cost-view.js';
import SortingView from '../view/sorting-view.js';
import CreationFormView from '../view/creation-form-view.js';
import WaypointView from '../view/waypoint-view.js';
import {RenderPosition, render} from '../render.js';

export default class ContentPresenter {
  tripEventsListComponent = new TripEventsListView();
  routeWrapperComponent = new RouteWrapperView();

  constructor({tripEventsContainer, routeContainer, pointsModel}) {
    this.tripEventsContainer = tripEventsContainer;
    this.routeContainer = routeContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    console.log(this.points);

    render(this.routeWrapperComponent, this.routeContainer, RenderPosition.AFTERBEGIN);
    render(new RouteInfoView(), this.routeWrapperComponent.getElement());
    render(new RouteCostView(), this.routeWrapperComponent.getElement());

    render(new SortingView(), this.tripEventsContainer);
    render(this.tripEventsListComponent, this.tripEventsContainer);
    render(new CreationFormView(), this.tripEventsListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new WaypointView({point: this.points[i]}), this.tripEventsListComponent.getElement());
    }
  }
}
