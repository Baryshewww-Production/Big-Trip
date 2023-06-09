import {createElement} from '../render.js';

function createRouteCostTemplate() {
  return '<p class="trip-info__cost">Общая стоимость: &euro;&nbsp;<span class="trip-info__cost-value">1230</span></p>';
}

export default class RouteCostView {
  #element = null;

  get template() {
    return createRouteCostTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
