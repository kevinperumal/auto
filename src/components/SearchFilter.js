import React from "react";
import Slider from "rc-slider";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "rc-slider/assets/index.css";
import "../css/App.css";

const Range = Slider.Range;

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 100000]
    };
    this.onSliderChange = this.onSliderChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      value
    });
  }

  handleClick(value) {
    this.props.updateSearch({ page: "1", min: value[0], max: value[1] });
  }

  render() {
    return (
      <div>
        <div>
          <Typography variant="title">Price Range</Typography>
          <div className="range-values">
            <span>{this.state.value[0]}</span>
            <span>{this.state.value[1]}</span>
          </div>
          <Range
            allowCross={false}
            value={this.state.value}
            onChange={this.onSliderChange}
            min={0}
            max={100000}
            step={100}
          />
          <div className="range-submit-button">
            <button onClick={() => this.handleClick(this.state.value)}>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchFilter);
