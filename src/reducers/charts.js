import { getChartData } from "../api/charts";
import { getDateRange } from "../api/date";
import { pieBody, pieUrl } from "../helpers/apiHelpers/pie";
import { barBody, barUrl } from "../helpers/apiHelpers/bar";
import { tableBody, tableUrl } from "../helpers/apiHelpers/table";
import { dateBody, dateUrl } from "../helpers/apiHelpers/date";

const SET_PIE_CHART_DATA = "SET_PIE_CHART_DATA";
const SET_TABLE_CHART_DATA = "SET_TABLE_CHART_DATA";
const SET_BAR_CHART_DATA = "SET_BAR_CHART_DATA";
const SET_START_DATE = "SET_START_DATE";
const SET_END_DATE = "SET_END_DATE";
const SET_DATE_RANGE = "SET_DATE_RANGE";
const SET_START_DATE_EPOCH = "SET_START_DATE_EPOCH";
const SET_END_DATE_EPOCH = "SET_END_DATE_EPOCH";

const setPieChartData = (pieData) => ({
  type: SET_PIE_CHART_DATA,
  pieData,
});
const setTableChartData = (tableData) => ({
  type: SET_TABLE_CHART_DATA,
  tableData,
});
const setBarChartData = (barData) => ({
  type: SET_BAR_CHART_DATA,
  barData,
});

const setStartDate = (date) => ({
  type: SET_START_DATE,
  date,
});

const setEndDate = (date) => ({
  type: SET_END_DATE,
  date,
});

const setStartDateEpoch = (epoch) => ({
  type: SET_START_DATE_EPOCH,
  epoch,
});

const setEndDateEpoch = (epoch) => ({
  type: SET_END_DATE_EPOCH,
  epoch,
});

// const setDateRange = (date) => ({
//   type: SET_DATE_RANGE,
//   date,
// });

const init = (userToken) => async (dispatch, getstate) => {
  try {
    const piePromise = getChartData(pieUrl, pieBody, userToken);
    const tablePromise = getChartData(tableUrl, tableBody, userToken);
    const barPromise = getChartData(barUrl, barBody, userToken);
    const [pieApiData, tableApiData, barApiData] = await Promise.all([
      piePromise,
      tablePromise,
      barPromise,
    ]);

    const dateApiData = await getDateRange(dateUrl, dateBody, userToken);

    let startDateEpoch = dateApiData && dateApiData.result.startDate;
    let endDateEpoch = dateApiData && dateApiData.result.endDate;

    console.log(startDateEpoch, endDateEpoch, "dateApiData");

    // normalize pie data
    let pie = [];
    pieApiData &&
      pieApiData.result.data.map((data) =>
        pie.push({ type: data.advertiserId, value: Number(data.CM001) })
      );

    // normalize table data
    let table = {
      labels: [],
      data: [],
    };

    const tableLabels =
      tableApiData && tableApiData.result.data.map((data) => data.appSiteId);
    const tableData =
      tableApiData &&
      tableApiData.result.data.map((data) => Number(data.impressions_offered));

    table.labels = [...tableLabels];
    table.data = [...tableData];
    console.log({ tableLabels, tableData, table });

    // tableApiData &&
    //   tableApiData.result.data.map(
    //     (data) => table.labels.push(data.appSiteId),
    //     table.data.push(Number(data.impressions_offered))
    //   );

    // normalize barApiData data
    let bar = [];

    barApiData &&
      barApiData.result.data.map((data) =>
        bar.push({
          publisherId: data.publisherId,
          impressions_offered: Number(data.impressions_offered),
        })
      );

    dispatch(setPieChartData(pie));
    dispatch(setTableChartData(table));
    dispatch(setBarChartData(bar));
    dispatch(setStartDateEpoch(Number(startDateEpoch)));
    dispatch(setEndDateEpoch(Number(endDateEpoch)));
  } catch (error) {
    console.log(error);
  }
};

const getMinDate = (date) => (dispatch) => {
  dispatch(setStartDate(date));
};

const getMaxDate = (date) => (dispatch) => {
  dispatch(setEndDate(date));
};

const updateChart = (startDate, endDate, userToken) => async (
  dispatch,
  getState
) => {
  // const { startDate } = Date.parse(getState().charts.startDate);
  // const { endDate } = Date.parse(getState().charts.endDate);
  const startDateEpoch = Date.parse(startDate);
  const endDateEpoch = Date.parse(endDate);
  console.log({ startDateEpoch, endDateEpoch });

  // update pieBody with update date
  let updatePieBody = Object.assign(pieBody);
  updatePieBody.chartObject.requestParam.dateRange.startDate = startDateEpoch.toString();
  updatePieBody.chartObject.requestParam.dateRange.endDate = endDateEpoch.toString();

  // update tableBody with update date
  let updateTableBody = Object.assign(tableBody);
  updateTableBody.chartObject.requestParam.dateRange.startDate = startDateEpoch.toString();
  updateTableBody.chartObject.requestParam.dateRange.endDate = endDateEpoch.toString();

  // update barBody with update date
  let updatebarBody = Object.assign(barBody);
  updatebarBody.chartObject.requestParam.dateRange.startDate = startDateEpoch.toString();
  updatebarBody.chartObject.requestParam.dateRange.endDate = endDateEpoch.toString();

  // console.log(updatePieBody, "in uuuuuuuuuuuuupppppp");

  try {
    const piePromise = getChartData(pieUrl, updatePieBody, userToken);
    const tablePromise = getChartData(tableUrl, updateTableBody, userToken);
    const barPromise = getChartData(barUrl, updatebarBody, userToken);
    const [pieApiData, tableApiData, barApiData] = await Promise.all([
      piePromise,
      tablePromise,
      barPromise,
    ]);

    // console.log({ pieApiData });
    // console.log({ tableApiData });
    console.log({ barApiData });
    let pie = [];

    pieApiData &&
      pieApiData.result.data.map((data) =>
        pie.push({ type: data.advertiserId, value: Number(data.CM001) })
      );

    // normalize table data
    let table = {
      labels: [],
      data: [],
    };

    const tableLabels =
      tableApiData && tableApiData.result.data.map((data) => data.appSiteId);
    const tableData =
      tableApiData &&
      tableApiData.result.data.map((data) => Number(data.impressions_offered));

    table.labels = [...tableLabels];
    table.data = [...tableData];
    console.log({ tableLabels, tableData, table });

    // normalize barApiData data
    let bar = [];

    barApiData &&
      barApiData.result.data.map((data) =>
        bar.push({
          publisherId: data.publisherId,
          impressions_offered: Number(data.impressions_offered),
        })
      );

    dispatch(setPieChartData(pie));
    dispatch(setTableChartData(table));
    dispatch(setBarChartData(bar));
  } catch (error) {
    console.log(error);
  }
};

export const defaultState = {
  pieData: [],
  tableData: [],
  barData: [],
  startDate: null,
  endDate: null,
  startDateEpoch: null,
  endDateEpoch: null,
  dateRange: {},
};

export const ACTIONS = {
  init,
  getMinDate,
  getMaxDate,
  updateChart,
};

function charts(state = defaultState, action) {
  switch (action.type) {
    case SET_PIE_CHART_DATA:
      return Object.assign({}, state, {
        pieData: action.pieData,
      });
    case SET_TABLE_CHART_DATA:
      return Object.assign({}, state, {
        tableData: action.tableData,
      });
    case SET_BAR_CHART_DATA:
      return Object.assign({}, state, {
        barData: action.barData,
      });
    case SET_START_DATE:
      return Object.assign({}, state, {
        startDate: action.date,
      });
    case SET_END_DATE:
      return Object.assign({}, state, {
        endDate: action.date,
      });

    case SET_START_DATE_EPOCH:
      return Object.assign({}, state, {
        startDateEpoch: action.epoch,
      });
    case SET_END_DATE_EPOCH:
      return Object.assign({}, state, {
        endDateEpoch: action.epoch,
      });
    // case SET_DATE_RANGE:
    //   return Object.assign({}, state, {
    //     dateRange: action.date,
    //   });
    default:
      return state;
  }
}

export default charts;
