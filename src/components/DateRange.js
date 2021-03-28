import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateRange extends React.Component {
  render() {
    const {
      startDate,
      endDate,
      ACTIONS,
      dispatch,
      userToken,
      startDateEpoch,
      endDateEpoch,
    } = this.props;
    const { getMinDate, getMaxDate, updateChart } = ACTIONS;

    const switchStartDate = startDate && Date.parse(startDate);

    return (
      <div style={{ display: "flex" }}>
        <div style={{ padding: "5px" }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => dispatch(getMinDate(date))}
            minDate={new Date(startDateEpoch)}
            maxDate={new Date(endDateEpoch)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
          />
        </div>
        <div style={{ padding: "5px" }}>
          <DatePicker
            selected={endDate}
            onChange={(date) => dispatch(getMaxDate(date))}
            minDate={
              startDate ? new Date(switchStartDate) : new Date(startDateEpoch)
            }
            maxDate={new Date(endDateEpoch)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select end date"
          />
        </div>
        {startDate && endDate && (
          <div style={{ padding: "5px" }}>
            <button
              onClick={() =>
                dispatch(updateChart(startDate, endDate, userToken))
              }
            >
              Update Data
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapProps = (state) => {
  return state.charts;
};

export default connect(mapProps)(DateRange);
