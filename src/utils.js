import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

const DATE_EDIT_FORMAT = 'DD/MM/YYYY hh:mm';
const DATE_FORMAT = 'MMM D';

dayjs.extend(LocalizedFormat);

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getCorrectDateEditFormat(date) {
  return date ? dayjs(date).format(DATE_EDIT_FORMAT) : '';
}

function getCorrectDateFromat(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export {getRandomArrayElement, getCorrectDateEditFormat, getCorrectDateFromat };
