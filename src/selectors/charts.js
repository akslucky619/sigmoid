// import { createSelector } from "reselect";
// import { get, uniqBy, round } from "lodash";

// const getPieChartData = (state) =>
//   state && get(state.charts.pieData.result, data, []);
// // const getTableChartData = (state) =>
// //   state && state.charts.tableData.result.data;
// // const getBarChartData = (state) => state && state.charts.barData.result.data;

// const normalizePieDataList = (type, value) => ({
//   type,
//   value,
// });

// export const getAllPieData = createSelector(
//   [getPieChartData],
//   (pieChartData) => {
//     let renderingPieData = [];
//     console.log({ pieChartData }, "=======>");
//     pieChartData &&
//       pieChartData.map((data) => {
//         const type = data.advertiserId;
//         const value = Number(data.CM001);

//         const normalizePieData = normalizePieDataList(type, value);

//         renderingPieData.push(normalizePieData);
//       });
//     return renderingPieData;
//   }
// );
