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
const SET_IS_LOADING = "SET_IS_LOADING";

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

const setIsLoading = (bool) => ({
  type: SET_IS_LOADING,
  bool,
});

const init = (userToken) => async (dispatch, getstate) => {
  try {
    dispatch(setIsLoading(true));
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

    // normalize pie data
    let pie = [];
    pieApiData &&
      pieApiData.result.data.map((data) =>
        pie.push({
          type: data.advertiserId,
          value: Math.ceil(Number(data.CM001)),
        })
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
    dispatch(setIsLoading(false));

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
  const startDateEpoch = Date.parse(startDate);
  const endDateEpoch = Date.parse(endDate);

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

  try {
    dispatch(setIsLoading(true));

    const piePromise = getChartData(pieUrl, updatePieBody, userToken);
    const tablePromise = getChartData(tableUrl, updateTableBody, userToken);
    const barPromise = getChartData(barUrl, updatebarBody, userToken);
    const [pieApiData, tableApiData, barApiData] = await Promise.all([
      piePromise,
      tablePromise,
      barPromise,
    ]);

    let pie = [];

    pieApiData &&
      pieApiData.result.data.map((data) =>
        pie.push({
          type: data.advertiserId,
          value: Math.ceil(Number(data.CM001)),
        })
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
    dispatch(setIsLoading(false));
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
  isLoading: false,
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
    case SET_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.bool,
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
