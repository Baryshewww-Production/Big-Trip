import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';
import {CITIES} from '../const.js';

const destinationMock = [
  {
    id: 1,
    description: `${getRandomArrayElement(CITIES)}, просто потрясающий город`,
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(0, 10)}`,
        description: `${getRandomArrayElement(CITIES)}, это город с самыми красивыми достопримечательностями`
      }
    ],
  },
  {
    id: 2,
    description: `${getRandomArrayElement(CITIES)}, просто невероятный город`,
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(0, 10)}`,
        description: `${getRandomArrayElement(CITIES)}, это город с самыми красивыми яхтами и закатами`
      }
    ],
  },
  {
    id: 3,
    description: `${getRandomArrayElement(CITIES)}, просто город как город. Ничего необычного`,
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(0, 10)}`,
        description: `${getRandomArrayElement(CITIES)}, это город с заурядными улочками и жителями`
      }
    ],
  }
];

export {destinationMock};
