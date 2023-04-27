import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';

const titles = [
  'просто потрясающий город',
  'просто невероятный город',
  'просто город как город. Ничего необычного',
  '- лучшее, что может случиться с тобой за это лето!!!',
  '- столица нашей малой родины)',
  '- город, где можно вкусно пожрать:)',
  '- город Герой!',
  '- самый дерьмовый город в котором ты был',
  'настоящая деревня. Никогда не возвращайся сюда)',
  'город на Каме',
  'маленький городишка в подмосковной губернии',
  '- город с самыми красивыми людьми)',
];

const description = [
  '- это город с самыми красивыми достопримечательностями',
  '- это город с самыми красивыми яхтами и закатами',
  '- это город с заурядными улочками и жителями',
];

function createDestinationMock(city) {

  return {
    id: 1,
    description: `${city} ${getRandomArrayElement(titles)}`,
    name: `${city}`,
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(0, 10)}`,
        description: `${city} ${getRandomArrayElement(description)}`
      }
    ],
  };
}

export {createDestinationMock};
