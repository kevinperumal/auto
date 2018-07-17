import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home";
import Nav from "../components/Nav";
import VehicleDetails from "../containers/VehicleDetails";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/details" component={VehicleDetails} />
          <Route path="/" component={Home} />
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
