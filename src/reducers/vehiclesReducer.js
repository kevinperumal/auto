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
      if (!state.records) return Object.assign({}, state, { records: [] });
      let recordsCopy = state.records.map(a => Object.assign({}, a));
      action.payload.forEach(view => {
        // eslint-disable-next-line
        return recordsCopy.find(copy => {
          if (copy.vin === view.vin) {
            copy.views = view.views;
          }
        });
      });
      return Object.assign({}, state, { records: recordsCopy });
    case INCREMENT_VIEWS_FAILED:
      return state;
    default:
      return state;
  }
};

export default vehicles;
