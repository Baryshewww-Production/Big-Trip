import {createElement} from '../render.js';

function createRouteInfoTemplate() {
  return (
    `<div class="trip-info__main">
         <h1 class="trip-info__title">Амстердам &mdash; Шамони &mdash; Женева</h1>
         <p class="trip-info__dates">MAR 18&nbsp;&mdash;&nbsp;20</p>
    </div>`
  );
}

export default class RouteInfoView {
  #element = null;

  get template() {
    return createRouteInfoTemplate();
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
