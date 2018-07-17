import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas";
const monitor = window["__SAGA_MONITOR_EXTENSION__"];

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });
export const history = createBrowserHistory();

export function makeStore(state, isClient) {
  if (isClient && window && window.devToolsExtension) {
    const store = createStore(
      connectRouter(history)(rootReducer),
      state,
      compose(
        applyMiddleware(sagaMiddleware, routerMiddleware(history)),
        window.devToolsExtension()
      )
    );
    sagaMiddleware.run(rootSaga);
    return store;
  } else {
    const store = createStore(
      connectRouter(history)(rootReducer),
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
      state
    );
    sagaMiddleware.run(rootSaga);
    return store;
  }
}
