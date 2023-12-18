import { createElement } from '../render.js';

function createDestinationListTemplate() {
  return (
    `<ul class="trip-events__list"></ul>`
  );
}

export default class DestinationListView {
  getTemplate(){
    return createDestinationListTemplate();
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
