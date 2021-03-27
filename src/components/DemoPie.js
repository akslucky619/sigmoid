import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/charts";

class DemoPie extends React.Component {
  render() {
    console.log(this.props, "in pie");
    const { pieData } = this.props;
    var data = pieData;
    var config = {
      appendPadding: 5,
      data: data,
      angleField: "value",
      colorField: "type",
      radius: 1,
      label: {
        type: "spider",
        labelHeight: 28,
        content: "{name}\n{percentage}",
      },
      interactions: [{ type: "element-selected" }, { type: "element-active" }],
    };
    return <Pie {...config} />;
  }
}

export default DemoPie;
