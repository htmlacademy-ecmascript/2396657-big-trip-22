import FiltersView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';

import {render} from './render.js';
import TripInfoView from './view/trip-info-view.js';

const pageHeaderElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');
const tripMainElement = pageHeaderElement.querySelector('.trip-main');
const tripControlsFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventElement = pageMainElement.querySelector('.trip-events');
const tripInfoPresenter = new BoardPresenter({tripEventsContainer: tripEventElement});

render(new TripInfoView(), tripMainElement, 'afterbegin');
render(new FiltersView(), tripControlsFiltersElement);
render(new SortView(), tripEventElement);

tripInfoPresenter.init();
