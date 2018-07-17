import { UPDATE_SEARCH } from "../actions";

const defaultState = null;

const searchParams = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};

export default searchParams;
