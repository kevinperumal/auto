import React, { Component } from "react";
import PropTypes from "prop-types";
import VehicleRow from "../components/VehicleRow";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class VehicleDetails extends Component {
  render() {
    const { selectedVehicle } = this.props;
    return (
      <div className="vehicle-details-container">
        <VehicleRow vehicle={selectedVehicle} />
        <Card>
          <div>
            <CardContent>
              <Typography variant="headline">Details</Typography>
              <ul>
                <li>Mileage: {selectedVehicle.mileage}</li>
                <li>Condition: {selectedVehicle.condition}</li>
                <li>Dealer: {selectedVehicle.dealer_name}</li>
                <li>Provider: {selectedVehicle.provider_name}</li>
              </ul>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

VehicleDetails.propTypes = {
  selectedVehicle: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedVehicle: state.selectedVehicle
  };
};

export default withRouter(connect(mapStateToProps)(VehicleDetails));
