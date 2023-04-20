import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';
import {destinationMock} from './destination-mock.js';
import {offersMock} from './offers-mock.js';
import {OFFER_TYPE} from '../const.js';

const pointsMock = [
  {
    basePrice: getRandomPositiveInteger(120, 950),
    dateFrom: '2023-04-18T22:55:56',
    dateTo: '2023-04-19T11:22:11',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(OFFER_TYPE),
  },
  {
    basePrice: getRandomPositiveInteger(205, 800),
    dateFrom: '2023-04-24T22:55:56',
    dateTo: '2023-04-25T11:22:11',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(OFFER_TYPE),
  },
  {
    basePrice: getRandomPositiveInteger(347, 650),
    dateFrom: '2023-04-22T22:55:56',
    dateTo: '2023-04-24T11:22:11',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(OFFER_TYPE),
  },
  {
    basePrice: getRandomPositiveInteger(360, 450),
    dateFrom: '2023-04-19T22:55:56',
    dateTo: '2023-04-21T11:22:11',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(OFFER_TYPE),
  },
];

function getRandomPoint() {
  return getRandomArrayElement(pointsMock);
}

export {getRandomPoint};
