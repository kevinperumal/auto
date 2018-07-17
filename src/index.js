import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { makeStore, history } from "./helpers";
import { ConnectedRouter } from "connected-react-router";
import registerServiceWorker from "./registerServiceWorker";

import App from "./components/App";

const initialState = window.__INITIAL_STATE__;

const store = makeStore(initialState, true);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      document.getElementById("root")
    );
  });
}

registerServiceWorker();

export default store;
