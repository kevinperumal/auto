import { UPDATE_SELECTED_VEHICLE } from "../actions";

const defaultState = {};

const selectedVehicle = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_VEHICLE:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};

export default selectedVehicle;
