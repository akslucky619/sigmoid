import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateRange extends React.Component {
  render() {
    const { startDate, endDate, ACTIONS } = this.props;
    const { getMinDate, getMaxDate } = ACTIONS;
    console.log(this.props, "====================");
    console.log(ACTIONS);

    this.handleClickMindDate = (date) => {
      console.log(date, "iiiiinnnnnnn daaaaaaaaate");
      this.props.dispatch(getMinDate(date));
    };

    this.handleClickMaxDate = (date) => {
      console.log(date, "iiiiinnnnnnn daaaaaaaaate");
      this.props.dispatch(getMaxDate(date));
    };
    return (
      <div style={{ display: "flex" }}>
        <div style={{ padding: "5px" }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => this.handleClickMindDate(date)}
            minDate={new Date(1491004800000)}
            maxDate={new Date(1493506800000)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
          />
        </div>
        <div style={{ padding: "5px" }}>
          <DatePicker
            selected={endDate}
            onChange={(date) => this.handleClickMaxDate(date)}
            minDate={new Date(1491004800000)}
            maxDate={new Date(1493506800000)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
          />
        </div>
      </div>
    );
  }
}

const mapProps = (state) => {
  // const user = state.user;
  // console.log(state);
  return state.charts;
};

export default connect(mapProps)(DateRange);
