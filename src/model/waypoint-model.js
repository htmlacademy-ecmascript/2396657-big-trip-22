import { getRandomWaypoint } from '../mock/waypoint';
import { mockOffers } from '../mock/offers';
import { mockDestinations } from '../mock/destinations';

const WAYPOINTS_COUNT = 3;

export default class WaypointsModel {
  waypoints = Array.from({length: WAYPOINTS_COUNT}, getRandomWaypoint);
  offers = mockOffers;
  destinations = mockDestinations;

  getWaypoints() {
    return this.waypoints;
  }

  getOffers() {
    return this.offers;
  }

  getOfferByType(type) {
    const allOffers = this.getOffers();
    return allOffers.find((offer) => offer.type === type);
  }

  getOfferById(type, itemsId) {
    const offersType = this.getOfferByType(type);

    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }

  getDestination() {
    return this.destinations;
  }

  getDestinationById(id) {
    const allDestinations = this.getDestination();
    return allDestinations.find((destination) => destination.id === id);
  }
}

