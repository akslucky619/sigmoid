import React, { useState, useEffect } from "react";
// import { Pie } from "@ant-design/charts";
import Chart from "chart.js";

class Bar extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: [
          "30/12/2019",
          "29/12/2019",
          "28/12/2019",
          "27/12/2019",
          "26/12/2019",
          "25/12/2019",
          "24/12/2019",
          "23/12/2019",
          "22/12/2019",
          "21/12/2019",
          "20/12/2019",
          "19/12/2019",
          "18/12/2019",
          "17/12/2019",
          "16/12/2019",
          "15/12/2019",
          "14/12/2019",
          "13/12/2019",
          "12/12/2019",
          "11/12/2019",
          "30/12/2019",
          "29/12/2019",
          "28/12/2019",
          "27/12/2019",
          "26/12/2019",
          "25/12/2019",
          "24/12/2019",
          "23/12/2019",
          "22/12/2019",
          "21/12/2019",
          "20/12/2019",
          "19/12/2019",
          "18/12/2019",
          "17/12/2019",
          "16/12/2019",
          "15/12/2019",
          "14/12/2019",
          "13/12/2019",
          "12/12/2019",
          "11/12/2019",
        ],
        datasets: [
          {
            label: "Long",
            backgroundColor: "#0353a4",

            data: [
              9000,
              5000,
              5240,
              3520,
              2510,
              3652,
              4555,
              7850,
              8850,
              4000,
              5000,
              4520,
              4457,
              9200,
              8750,
              9500,
              10000,
              11010,
              11432,
              9850,
              9000,
              5000,
              5240,
              3520,
              2510,
              3652,
              4555,
              7850,
              8850,
              4000,
              5000,
              4520,
              4457,
              9200,
              8750,
              9500,
              10000,
              11010,
              11432,
              9850,
            ],
          },
        ],
      },

      options: {
        scales: {
          yAxes: [{ stacked: true }],
          xAxes: [
            {
              stacked: true,
              ticks: { maxRotation: 90, minRotation: 90 },
            },
          ],
        },
      },
    });
  }

  render() {
    // console.log(this.props, "in pie");

    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default Bar;
