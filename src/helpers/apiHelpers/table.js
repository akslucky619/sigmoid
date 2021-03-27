export const table = {
  _id: "dashboard1516252235693",
  emailId: "candidate@sigmoid.com",
  orgViewReq: {
    organization: "DemoTest",
    view: "Auction",
  },
  chartObject: {
    metadata: {
      title: "chartobject:1516252235693",
      img_thumbnail: "../img/chart.png",
      chartType: "table",
      dataLimit: 50,
    },
    requestParam: {
      granularity: "hour",
      timeZone: {
        name: "UTC (+00:00)",
        location: "UTC",
      },
      dateRange: {
        startDate: "1493337600000",
        endDate: "1493510400000",
      },
      xAxis: ["D017"],
      yAxis: ["M002"],
      approxCountDistinct: [],
      specialCalculation: [],
      filter: [],
      orderBy: {
        metricOrdByList: [
          {
            id: "M002",
            desc: true,
          },
        ],
      },
      percentCalList: [],
    },
  },
};
