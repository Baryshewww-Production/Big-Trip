import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';
const EDIT_DATE_FORMAT = 'YY/MM/DD';
const HOURS_PER_DAY = 24;
const MIN_IN_AN_HOUR = 60;

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.round(Math.random() * (upper - lower) + lower);
  return Math.floor(result);
}

function humanizeDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat) : '';
}

function differentDate(from, to) {
  const date1 = dayjs(from);
  const date2 = dayjs(to);

  const dayResult = date2.diff(date1, 'day');
  const hourResult = date2.diff(date1, 'hour');
  const minuteResult = date2.diff(date1, 'minute');

  if (dayResult) {
    return `${dayResult}Д ${Math.round(hourResult / HOURS_PER_DAY)}Ч ${Math.round(minuteResult / (HOURS_PER_DAY * MIN_IN_AN_HOUR))}М`;
  } else if (hourResult) {
    return `${hourResult}Ч ${Math.round(minuteResult / HOURS_PER_DAY)}М`;
  } else {
    return `${minuteResult}М`;
  }
}

function hasOffers(offers) {
  return offers.length > 0;
}

export {
  getRandomArrayElement,
  getRandomPositiveInteger,
  humanizeDate,
  DATE_FORMAT,
  TIME_FORMAT,
  EDIT_DATE_FORMAT,
  differentDate,
  hasOffers,
};
