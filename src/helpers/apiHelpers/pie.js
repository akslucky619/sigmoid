export const pie = {
  _id: "Datastory_ChartId_1535224664111",
  emailId: "candidate@sigmoid.com",
  orgViewReq: {
    organization: "DemoTest",
    view: "Auction",
  },
  chartObject: {
    metadata: {
      title: "",
      img_thumbnail: "images/pie.png",
      chartType: "pie",
      dataLimit: 500,
    },
    text: [],
    requestParam: {
      granularity: "hour",
      timeZone: {
        name: "UTC (+00:00)",
        location: "UTC",
      },
      dateRange: {
        startDate: "1493424000000",
        endDate: "1493596800000",
      },
      xAxis: ["D005"],
      yAxis: [],
      approxCountDistinct: [],
      specialCalculation: ["CM001"],
      filter: [],
      orderBy: {
        customMetricOrdByList: [
          {
            id: "CM001",
            desc: true,
          },
        ],
      },
      percentCalList: [
        {
          id: "CM001",
        },
      ],
    },
  },
};
