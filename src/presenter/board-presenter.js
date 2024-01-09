import DestinationListView from '../view/destination-list-view.js';
import EditFormView from '../view/edit-view-form.js';
import { render } from '../render.js';
import DestinationPointView from '../view/destination-point-view.js';
//import CreationFormView from '../view/creation-form-view.js';

export default class BoardPresenter {
  waypintListComponent = new DestinationListView();

  constructor({boardContainer, waypointsModel}) {
    this.boardContainer = boardContainer;
    this.waypointsModel = waypointsModel;
  }

  init() {
    this.boardWaypoints = [...this.waypointsModel.getWaypoints()];
    render(this.waypintListComponent, this.boardContainer);
    render(new EditFormView({
      point: this.boardWaypoints[0],
      checkedOffers: [...this.waypointsModel.getOfferById(this.boardWaypoints[0].type, this.boardWaypoints[0].offers)],
      offers: this.waypointsModel.getOfferByType(this.boardWaypoints[0].type),
      destination: this.waypointsModel.getDestinationById(this.boardWaypoints[0].destination)
    }), this.waypintListComponent.getElement());
    //render(new CreationFormView(), this.listComponent.getElement());

    for (let i = 1; i < this.boardWaypoints.length; i++) {
      render(new DestinationPointView({
        point:  this.boardWaypoints[i],
        offers: [...this.waypointsModel.getOfferById(this.boardWaypoints[i].type, this.boardWaypoints[i].offers)],
        destination: this.waypointsModel.getDestinationById(this.boardWaypoints[i].destination)
      }), this.waypintListComponent.getElement());
    }
  }
}
