import "regenerator-runtime/runtime";
import { takeEvery, put, call, select, all } from "redux-saga/effects";
import {
  UPDATE_SEARCH,
  INCREMENT_VIEWS_REQUESTED,
  updateSelectedVehicle,
  updateVehiclesRequested,
  updateVehiclesSuccessful,
  updateVehiclesFailed,
  incrementViewsSuccessful,
  incrementViewsFailed
} from "../actions";
import { push } from "connected-react-router";
import { getVehicleData, updateViewCount, getVehicleDataVins } from "../api";

export function* rootSaga() {
   yield all([
    takeEvery(UPDATE_SEARCH, updateSearchAsync),
    takeEvery(INCREMENT_VIEWS_REQUESTED, incrementViewsAsync)
  ]);
}

function* updateSearchAsync(action) {
  try {
    yield put(updateVehiclesRequested());
    const vehicleData = yield call(() => getVehicleData(action.payload));
    const vehicleDataVins = yield call(() =>
        getVehicleDataVins(vehicleData.records.map(vehicle => vehicle.vin))
    );
    yield put(updateVehiclesSuccessful(vehicleData));
    yield put(incrementViewsSuccessful(vehicleDataVins));
    yield put(push("/search"));
  } catch (error) {
    yield put(updateVehiclesFailed());
  }
}

function* incrementViewsAsync(action) {
  const vehicle = action.payload;
  try {
    const updatedVehicleViewCount = yield call(() =>
      updateViewCount(vehicle.vin)
    );
    yield put(
      incrementViewsSuccessful([
        Object.assign({}, vehicle, { views: updatedVehicleViewCount.views })
      ])
    );
    const vehicles = yield select(state => state.vehicles.records);
    yield put(
      updateSelectedVehicle(vehicles.find(v => v.vin === vehicle.vin))
    );
    yield put(push("/details"));
  } catch (error) {
    yield put(incrementViewsFailed());
  }
}
