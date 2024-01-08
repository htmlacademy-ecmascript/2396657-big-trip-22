import FiltersView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';

import {render} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import WaypointsModel from './model/waypoint-model.js';

const pageHeaderElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');
const tripMainElement = pageHeaderElement.querySelector('.trip-main');
const tripControlsFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventElement = pageMainElement.querySelector('.trip-events');
const waypointsModel = new WaypointsModel();
const tripInfoPresenter = new BoardPresenter({boardContainer: tripEventElement, waypointsModel});

render(new TripInfoView(), tripMainElement, 'afterbegin');
render(new FiltersView(), tripControlsFiltersElement);
render(new SortView(), tripEventElement);

tripInfoPresenter.init();
