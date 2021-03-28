import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class BarChart extends React.Component {
  chartRef = React.createRef();

  //   componentDidMount() {
  //     const myChartRef = this.chartRef.current.getContext("2d");
  //     console.log(this.props, "iiiiiin");
  //     const { tableData } = this.props;

  //     const { labels, data } = tableData && tableData;

  //     new Chart(myChartRef, {
  //       type: "bar",
  //       data: {
  //         labels: [...labels],
  //         datasets: [
  //           {
  //             label: "appSiteId",
  //             backgroundColor: "#0353a4",

  //             data: [...data],
  //           },
  //         ],
  //       },

  //       options: {
  //         scales: {
  //           yAxes: [{ stacked: true }],
  //           xAxes: [
  //             {
  //               stacked: true,
  //               ticks: { maxRotation: 90, minRotation: 90 },
  //             },
  //           ],
  //         },
  //       },
  //     });
  // }

  render() {
    console.log(this.props, "in pie");
    const { tableData } = this.props;

    const { labels, data } = tableData && tableData;
    const dataConfig = {
      labels: [...labels],
      datasets: [
        {
          label: "My First dataset",
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
      <div style={{height:"300px"}}>
        <h2>Bar Example </h2>
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
  // const user = state.user;
  // console.log(state);
  return state.charts;
};

export default connect(mapProps)(BarChart);
