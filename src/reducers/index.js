import { combineReducers } from "redux";
import vehicles from "./vehiclesReducer";
import selectedVehicle from "./selectedVehicleReducer";
import searchParams from "./searchReducer";

export default combineReducers({
  vehicles,
  searchParams,
  selectedVehicle
});
