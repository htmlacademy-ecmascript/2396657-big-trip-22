import { getRandomArrayElement } from '../utils';

const mockWaypoints = [
  {
    id: '1',
    dateFrom: new Date('2019-01-25'),
    dateTo: new Date('2023-01-28'),
    type: 'taxi',
    price: '200',
    destination: '2',
    offers: ['1'],
    isFavorite: true

  },
  {
    id: '2',
    dateFrom:new Date('2019-02-25'),
    dateTo: new Date('2019-03-10'),
    type: 'flight',
    price: '150',
    destination: '3',
    offers: ['1', '2', '3'],
    isFavorite: true

  },
  {
    id: '3',
    dateFrom:new Date('2019-06-25'),
    dateTo: new Date('2019-06-30'),
    type: 'restaurant',
    price: '300',
    destination: '1',
    offers: [],
    isFavorite: false

  }
];

function getRandomWaypoint() {
  return getRandomArrayElement(mockWaypoints);
}

export {getRandomWaypoint};
