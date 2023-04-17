import {createElement} from '../render.js';

function createMenuNavTemplate() {
  return (`<nav class="trip-controls__trip-tabs  trip-tabs">
                <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Расписание</a>
                <a class="trip-tabs__btn" href="#">Статистика</a>
              </nav>`
  );
}

export default class MenuNavView {
  getTemplate() {
    return createMenuNavTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
