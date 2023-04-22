import {createElement} from '../render.js';
import {getRandomArrayElement, getRandomPositiveInteger, humanizeEditPointDate, humanizePointDueTime, hasOffers} from '../utils.js';
import {OFFER_TYPE, CITIES} from '../const.js';
import {pointsMock} from '../mock/points-mock.js';
import {offerId} from '../mock/offers-mock.js';

const offerArrayType = Object.entries(OFFER_TYPE);

const typeRandom = getRandomArrayElement(offerArrayType);
const destinationRandom = getRandomArrayElement(pointsMock).destination;
const cityRandom = destinationRandom.name;
const srcRandom = destinationRandom.pictures[0].src;

const BLANK_POINT = {
  basePrice: getRandomPositiveInteger(100, 110),
  dateFrom: '2023-04-22T12:55:56',
  dateTo: '2023-04-22T13:22:11',
  destination: destinationRandom,
  city: cityRandom,
  cities: CITIES,
  src: srcRandom,
  id: '0',
  offers: [...offerId[typeRandom[1]]],
  type: typeRandom,
};

function createCreationFormTemplate(data) {
  const {basePrice, dateFrom, dateTo, destination, city, cities, offers, type} = data;

  const returnOfferTypes = (arrayOfferType) => {
    let fieldsets = '';

    arrayOfferType.forEach((offerType) => {
      fieldsets += `
      <div class="event__type-item">
         <input id="event-type-${offerType[0]}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offerType[0]}">
         <label class="event__type-label  event__type-label--${offerType[0]}" for="event-type-${offerType[0]}-1">${offerType[1]}</label>
      </div>`;
    });

    return fieldsets;
  };

  const returnCityValues = (values) => {
    let citiesArray = '';

    values.forEach((cityValue) => {
      citiesArray += `<option value="${cityValue}"></option>`;
    });

    return citiesArray;
  };

  const showOffers = () => {
    let offerArray = '';

    offers.forEach((item) => {
      offerArray += `
      <div class="event__offer-selector">
         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${item.name}-${item.id}" type="checkbox" name="event-offer-comfort">
         <label class="event__offer-label" for="event-offer-${item.name}-${item.id}">
            <span class="event__offer-title">${item.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${item.price}</span>
         </label>
      </div>`;
    });

    return offerArray;
  };

  const returnImages = (array) => {
    let imageContainer = '';

    array.pictures.forEach((picture) => {
      imageContainer += `<img class="event__photo" src="${picture.src}" alt="Event photo">`;
    });

    return imageContainer;
  };

  return (`<form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Выбрать тип события</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type[0]}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Тип события</legend>
                        ${returnOfferTypes(offerArrayType)}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type[1]}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${returnCityValues(cities)}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">От</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeEditPointDate(dateFrom)} ${humanizePointDueTime(dateFrom)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">До</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeEditPointDate(dateTo)} ${humanizePointDueTime(dateTo)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Цена</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Сохранить</button>
                  <button class="event__reset-btn" type="reset">Отмена</button>
                </header>
                <section class="event__details">

                  ${hasOffers(offers) ? `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Предложения</h3>
                    <div class="event__available-offers">
                     ${showOffers()}
                    </div>
                  </section>` : ''}

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Место назначения</h3>
                    <p class="event__destination-description">${destination.description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${returnImages(destination)}
                      </div>
                    </div>
                  </section>
                </section>
              </form>`
  );
}

export default class CreationFormView {
  #element = null;
  #point = null;

  constructor({point = BLANK_POINT}) {
    this.#point = point;
  }

  get template() {
    return createCreationFormTemplate(this.#point);
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
