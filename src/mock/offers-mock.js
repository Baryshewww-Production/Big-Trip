import {OFFER_TYPE} from '../const.js';

const offersMock = [
  [
    {
      id: '1',
      name: 'comfort',
      title: 'Поменять на комфорт-тариф',
      price: 150,
    },
    {
      id: '2',
      name: 'business',
      title: 'Поменять на бизнес-тариф',
      price: 170,
    },
    {
      id: '3',
      name: 'gruzovoy',
      title: 'Заказать грузовой фургон',
      price: 50,
    },
    {
      id: '4',
      name: 'security',
      title: 'Сопровождение охраной',
      price: 250,
    }
  ],
  [
    {
      id: '1',
      name: 'home',
      title: 'Забрать с моей остановки',
      price: 70,
    },
    {
      id: '2',
      name: 'zabron',
      title: 'Забронировать комфортное место',
      price: 120,
    }
  ],
  [
    {
      id: '1',
      name: 'down-bad',
      title: 'Место на нижней койке',
      price: 450,
    },
    {
      id: '2',
      name: 'three',
      title: 'Трёх разовое питание',
      price: 250,
    },
    {
      id: '3',
      name: 'lanch',
      title: 'Обед',
      price: 70,
    },
    {
      id: '4',
      name: 'uzhin',
      title: 'Ужин',
      price: 65,
    },
    {
      id: '5',
      name: 'coupe',
      title: 'Индивидуальное купе',
      price: 1560,
    },
  ],
  [
    {
      id: '1',
      name: 'iachta',
      title: 'Роскошная яхта',
      price: 2550,
    },
    {
      id: '2',
      name: 'personal',
      title: 'Индивидуальное меню',
      price: 750,
    },
    {
      id: '3',
      name: 'fishing',
      title: 'Возможность порыбачить',
      price: 250,
    },
  ],
  [
    {
      id: '1',
      name: 'speed-metro',
      title: 'Скоростное метро',
      price: 50,
    },
  ],
  [
    {
      id: '1',
      name: 'speed-highway',
      title: 'Скоростные автобаны',
      price: 550,
    },
    {
      id: '2',
      name: 'new',
      title: 'Новая дорога',
      price: 350,
    },
  ],
  [
    {
      id: '1',
      name: 'apgrade',
      title: 'Поменять на бизнес-класс',
      price: 3550,
    },
    {
      id: '2',
      name: 'choose',
      title: 'Выбрать место',
      price: 700,
    },
    {
      id: '3',
      name: 'lanch-uzhin',
      title: 'Обед + ужин',
      price: 450,
    },
    {
      id: '4',
      name: 'water',
      title: 'Стакан воды',
      price: 10,
    },
  ],
  [
    {
      id: '1',
      name: 'graf-room',
      title: 'Двух-местный царский номер',
      price: 2450,
    },
    {
      id: '2',
      name: 'bar',
      title: 'Свой бар в номере',
      price: 200,
    },
    {
      id: '3',
      name: 'star',
      title: 'Пятизвездочный отель',
      price: 4550,
    },
    {
      id: '4',
      name: 'transfer',
      title: 'Трансфер до аэропорта',
      price: 250,
    },
  ],
  [
    {
      id: '1',
      name: 'gid',
      title: 'Личный гид',
      price: 850,
    },
  ],
  [],
];

const offerId = {
  [OFFER_TYPE.taxi]: offersMock[0],
  [OFFER_TYPE.bus]: offersMock[1],
  [OFFER_TYPE.train]: offersMock[2],
  [OFFER_TYPE.ship]: offersMock[3],
  [OFFER_TYPE.transport]: offersMock[4],
  [OFFER_TYPE.drive]: offersMock[5],
  [OFFER_TYPE.flight]: offersMock[6],
  [OFFER_TYPE.checkIn]: offersMock[7],
  [OFFER_TYPE.sightseeing]: offersMock[8],
  [OFFER_TYPE.restaurant]: offersMock[9],
};

export {offersMock, offerId};
