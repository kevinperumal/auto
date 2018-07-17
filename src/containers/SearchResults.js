import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSearch, incrementViewsRequested } from "../actions";
import VehicleRow from "../components/VehicleRow";
import { withRouter } from "react-router-dom";
import { find } from "underscore";
import { Pagination } from "react-materialize";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.goToDetails = this.goToDetails.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  goToDetails(vin) {
    this.props.incrementViewsRequested(
      find(this.props.vehicles, vehicle => vehicle.vin === vin)
    );
  }

  changePage(pageNum) {
    const { max, min } = this.props.searchParams;
    this.props.updateSearch({ page: pageNum, min, max });
  }

  render() {
    const { vehicles, searchParams, totalCount } = this.props;
    return (
      <div>
        {vehicles &&
          vehicles.map(vehicle => (
            <div
              key={vehicle.vin}
              onClick={() => {
                this.goToDetails(vehicle.vin);
              }}
            >
              <VehicleRow vehicle={vehicle} key={vehicle.vin} />
            </div>
          ))}
        <div className="search-pagination-container">
          <Pagination
            maxButtons={10}
            activePage={Number(searchParams.page)}
            items={Number(Math.ceil(totalCount / 20))}
            onSelect={pageNum => this.changePage(pageNum)}
          />
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  vehicles: PropTypes.array.isRequired,
  searchParams: PropTypes.object.isRequired,
  totalCount: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles ? state.vehicles.records : [],
    totalCount: state.vehicles.total_count,
    searchParams: state.searchParams
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { updateSearch, incrementViewsRequested },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchResults)
);
