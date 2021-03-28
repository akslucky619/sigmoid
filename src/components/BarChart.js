import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class BarChart extends React.Component {
  render() {
    console.log(this.props, "in pie");
    const { tableData } = this.props;

    const { labels, data } = tableData && tableData;
    const dataConfig = {
      labels: [...labels],
      datasets: [
        {
          label: "Impressions Offered",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [...data],
        },
      ],
    };
    return (
      <div style={{ height: "300px" }}>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={dataConfig}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

const mapProps = (state) => {
  return state.charts;
};

export default connect(mapProps)(BarChart);
