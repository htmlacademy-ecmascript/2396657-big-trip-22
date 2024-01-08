import { createElement } from '../render.js';
import { WAYPOINT_TYPE } from '../const.js';
import { getCorrectDateEditFormat } from '../utils.js';

function createEventTypeTemplate(type) {
  return (
    `<div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${type}>
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type}</label>
    </div>`
  )
}

function createDestinationDescriptionTemplate(destination) {
  const {description, photos} = destination;
  if (description > 0 || photos.length > 0) {
    return(
      `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${createPhotoContainerTemplate(photos)}
      </section>`
    );
  }
  return '';
}

function createDestinationTemplate(destination) {
  const {name} = destination;
  return (`<option value="${name}"></option>`);
}

function createPhotoContainerTemplate(photos) {
  if (photos.length > 0) {
    return (`<div class="event__photos-container">
      ${photos.map((photo) => createPhotoTemplate(photo)).join('')}
    </div>`);
  }

}

function createPhotoTemplate(photo) {
  const {src, description} = photo;
  return (`<img class="event__photo src=${src} alt=${description}">`)
}

function createOfferTemplate(offer, checkedOffers) {
  const {id, title, price} = offer;
  const isChecked = checkedOffers.includes(id) ? 'checked' : '';
  return(
    `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="${id}" type="checkbox" name="${id}" ${isChecked}>
    <label class="event__offer-label" for="${id}">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>`
  );
}

function createOfferListTemplate({offers}, checkedOffers) {
  if (offers.length !== 0) {
    return(
      `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
      ${offers.map((offer) => createOfferTemplate(offer, checkedOffers)).join('')}
      </div>
    </section>
  `);
  }
  return ('');
}
function createEditFormTemplate(point, offers, checkedOffers, destination) {
  const {type, dateFrom, dateTo, price} = point;
  const {name} = destination;

  return (
    `<li class="trip-events__item"><form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${WAYPOINT_TYPE.map((type) => createEventTypeTemplate(type)).join('')}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
        <datalist id="destination-list-1">
          ${createDestinationTemplate(name)}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getCorrectDateEditFormat(dateFrom)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getCorrectDateEditFormat(dateTo)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      ${createOfferListTemplate(offers, checkedOffers)}
      ${createDestinationDescriptionTemplate(destination)}
    </section>
  </form></li>`
  );
}

export default class EditFormView {
  constructor({point, offers, checkedOffers, destination}) {
    this.point = point;
    this.offers = offers;
    this.destination = destination;
    this.checkedOffers = checkedOffers;
  }

  getTemplate(){
    return createEditFormTemplate(this.point, this.offers, this.checkedOffers, this.destination);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
