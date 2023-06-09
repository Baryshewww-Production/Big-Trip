import {createElement} from '../render.js';
import {humanizeDate, DATE_FORMAT, TIME_FORMAT, differentDate} from '../utils.js';

function createWaypointTemplate(point) {
  const {basePrice, dateFrom, dateTo, destination, isFavorite, type} = point;
  const dateFormFormatted = humanizeDate(dateFrom, DATE_FORMAT);
  const timeFrom = humanizeDate(dateFrom, TIME_FORMAT);
  const timeTo = humanizeDate(dateTo, TIME_FORMAT);
  const favorite = () => isFavorite ? 'event__favorite-btn--active' : '';

  return (`<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${dateFrom}">${dateFormFormatted}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type[0]}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type[1]} ${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">${timeFrom}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTo}">${timeTo}</time>
                  </p>
                  <p class="event__duration">${differentDate(dateFrom, dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <button class="event__favorite-btn ${favorite()}" type="button">
                  <span class="visually-hidden">Добавить в избранное</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Открыть событие</span>
                </button>
              </div>
            </li>`
  );
}

export default class WaypointView {
  #element = null;
  #point = null;

  constructor ({point}) {
    this.#point = point;
  }

  get template() {
    return createWaypointTemplate(this.#point);
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
