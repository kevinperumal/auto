import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const VehicleRow = props => {
  const { vehicle } = props;
  return (
    <div className="vehicle-row-container">
      <Card className="vehicle-card-media">
        <CardMedia className="vehicle-card-container" src="vehicle">
          <img alt="" src={vehicle.thumbnail_url_large} />
        </CardMedia>
        <div>
          <CardContent>
            <Typography variant="headline">{`${vehicle.year} ${vehicle.make} ${
              vehicle.model
            }`}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {vehicle.price}
            </Typography>
            {vehicle.views && (
              <Typography>Viewed {vehicle.views} times</Typography>
            )}
          </CardContent>
          <div />
        </div>
      </Card>
    </div>
  );
};

VehicleRow.propTypes = {
  vehicle: PropTypes.object.isRequired
};

export default withRouter(VehicleRow);
