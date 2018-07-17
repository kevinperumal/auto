import {
  UPDATE_VEHICLES_SUCCESSFUL,
  UPDATE_VEHICLES_FAILED,
  INCREMENT_VIEWS_SUCCESSFUL,
  INCREMENT_VIEWS_FAILED
} from "../actions";

const defaultState = {
  records: []
};

const vehicles = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_VEHICLES_SUCCESSFUL:
      return action.payload;
    case UPDATE_VEHICLES_FAILED:
      return defaultState;
    case INCREMENT_VIEWS_SUCCESSFUL:
      return {
        ...state,
        records: state.records.map(
          record =>
            action.payload.find(view => record.vin === view.vin)
            ? {
              ...record,
              views: action.payload.find(view => record.vin === view.vin).views
            }
          : record
        )
      };
    case INCREMENT_VIEWS_FAILED:
      return state;
    default:
      return state;
  }
};

export default vehicles;
