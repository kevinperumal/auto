import React, { Component } from "react";
import SearchFilter from "../components/SearchFilter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Route } from "react-router-dom";
import { updateSearch } from "../actions";
import PropTypes from "prop-types";
import SearchResults from "../containers/SearchResults";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../css/App.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Card className="home-card-container">
          <CardContent>
            <div>
              <SearchFilter updateSearch={this.props.updateSearch} />
            </div>
          </CardContent>
        </Card>
        <Route path="/search" component={SearchResults} />
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateSearch }, dispatch);
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Home)
);
