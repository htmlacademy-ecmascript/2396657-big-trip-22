import DestinationListView from "../view/destination-list-view.js";
import EditFormView from "../view/edit-view-form.js";
import { render } from "../render.js";
import DestinationPointView from "../view/destination-point-view.js";
import CreationFormView from "../view/creation-form-view.js";

export default class BoardPresenter {
  listComponent = new DestinationListView();

  constructor({tripEventsContainer}) {
    this.tripEventsContainer = tripEventsContainer;
  }

  init() {
    render(this.listComponent, this.tripEventsContainer);
    render(new EditFormView(), this.listComponent.getElement());
    render(new CreationFormView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new DestinationPointView(), this.listComponent.getElement());
    }
  }
}
