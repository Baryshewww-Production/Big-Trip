import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';
import {destinationMock} from './destination-mock.js';
import {offersMock} from './offers-mock.js';
import {CITIES} from '../const.js';

const pointsMock = [
  {
    basePrice: getRandomPositiveInteger(300, 550),
    dateFrom: '2023-04-18T22:55:56.845Z',
    dateTo: '2023-04-19T11:22:11.375Z',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(CITIES),
  },
  {
    basePrice: getRandomPositiveInteger(300, 550),
    dateFrom: '2023-04-24T22:55:56.845Z',
    dateTo: '2023-04-25T11:22:11.375Z',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(CITIES),
  },
  {
    basePrice: getRandomPositiveInteger(300, 550),
    dateFrom: '2023-04-22T22:55:56.845Z',
    dateTo: '2023-04-24T11:22:11.375Z',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(CITIES),
  },
  {
    basePrice: getRandomPositiveInteger(300, 550),
    dateFrom: '2023-04-19T22:55:56.845Z',
    dateTo: '2023-04-20T11:22:11.375Z',
    destination: getRandomArrayElement(destinationMock),
    id: getRandomPositiveInteger(0,10),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: getRandomArrayElement(offersMock),
    type: getRandomArrayElement(CITIES),
  },
];

function getRandomPoint() {
  return getRandomArrayElement(pointsMock);
}

export {getRandomPoint};
