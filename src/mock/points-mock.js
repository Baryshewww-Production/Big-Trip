import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';
import {createDestinationMock} from './destination-mock.js';
import {offersMock} from './offers-mock.js';
import {CITIES, OFFER_TYPE} from '../const.js';

const offerArrayType = Object.entries(OFFER_TYPE);

function createPointMock(cities) {
  const city = getRandomArrayElement(cities);
  const type = getRandomArrayElement(offerArrayType);

  return {
    basePrice: getRandomPositiveInteger(120, 950),
    dateFrom: '2023-04-18T22:55:56',
    dateTo: '2023-04-19T11:22:11',
    destination: createDestinationMock(city),
    id: getRandomPositiveInteger(0, 10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: type,
  };
}

const pointsMock = [];

for (let i = 0; i < 7; i++) {
  pointsMock.push(createPointMock(CITIES));
}

function getRandomPoint() {
  return getRandomArrayElement(pointsMock);
}

export {getRandomPoint, pointsMock};
