export const UPDATE_VEHICLES_REQUESTED = "UPDATE_VEHICLES_REQUESTED";
export const UPDATE_VEHICLES_SUCCESSFUL = "UPDATE_VEHICLES_SUCCESS";
export const UPDATE_VEHICLES_FAILED = "UPDATE_VEHICLES_FAILED";

export const INCREMENT_VIEWS_REQUESTED = "INCREMENT_VIEWS_REQUESTED";
export const INCREMENT_VIEWS_SUCCESSFUL = "INCREMENT_VIEWS_SUCCESSFUL";
export const INCREMENT_VIEWS_FAILED = "INCREMENT_VIEWS_FAILED";

export const UPDATE_SELECTED_VEHICLE = "UPDATE_SELECTED_VEHICLE";
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const updateVehiclesRequested = () => ({
  type: UPDATE_VEHICLES_REQUESTED
});

export const updateVehiclesSuccessful = vehicles => ({
  type: UPDATE_VEHICLES_SUCCESSFUL,
  payload: vehicles
});

export const updateVehiclesFailed = () => ({
  type: UPDATE_VEHICLES_FAILED
});

export const incrementViewsRequested = vehicle => ({
  type: INCREMENT_VIEWS_REQUESTED,
  payload: vehicle
});

export const incrementViewsSuccessful = views => ({
  type: INCREMENT_VIEWS_SUCCESSFUL,
  payload: views
});

export const incrementViewsFailed = () => ({
  type: INCREMENT_VIEWS_FAILED
});

export const updateSelectedVehicle = vehicle => ({
  type: UPDATE_SELECTED_VEHICLE,
  payload: vehicle
});

export const updateSearch = search => ({
  type: UPDATE_SEARCH,
  payload: search
});
