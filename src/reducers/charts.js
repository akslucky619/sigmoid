import { getChartData } from "../api/charts";
import { pieBody, pieUrl } from "../helpers/apiHelpers/pie";
import { barBody, barUrl } from "../helpers/apiHelpers/bar";
import { tableBody, tableUrl } from "../helpers/apiHelpers/table";

const SET_PIE_CHART_DATA = "SET_PIE_CHART_DATA";
const SET_TABLE_CHART_DATA = "SET_TABLE_CHART_DATA";
const SET_BAR_CHART_DATA = "SET_BAR_CHART_DATA";
const SET_MIN_DATE = "SET_MIN_DATE";
const SET_MAX_DATE = "SET_MAX_DATE";

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

const setMinDate = (date) => ({
  type: SET_MIN_DATE,
  date,
});

const setMaxDate = (date) => ({
  type: SET_MAX_DATE,
  date,
});

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

    console.log({ pieApiData });
    console.log({ tableApiData });
    console.log({ barApiData });
    let pie = [];
    let table = [];

    pieApiData &&
      pieApiData.result.data.map((data) =>
        pie.push({ type: data.advertiserId, value: Number(data.CM001) })
      );

    tableApiData &&
      tableApiData.result.data.map((data) =>
        table.push({
          action: data.appSiteId,
          pv: Number(data.impressions_offered),
        })
      );

    dispatch(setPieChartData(pie));
    dispatch(setTableChartData(table));
    dispatch(setBarChartData(barApiData));
  } catch (error) {
    console.log(error);
  }
};

const getMinDate = (date) => (dispatch) => {
  dispatch(setMinDate(date));
};

const getMaxDate = (date) => (dispatch) => {
  dispatch(setMaxDate(date));
};

export const defaultState = {
  pieData: [],
  tableData: [],
  barData: [],
  startDate: null,
  endDate: null,
};

export const ACTIONS = {
  init,
  getMinDate,
  getMaxDate,
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
    case SET_MIN_DATE:
      return Object.assign({}, state, {
        startDate: action.date,
      });
    case SET_MAX_DATE:
      return Object.assign({}, state, {
        endDate: action.date,
      });
    default:
      return state;
  }
}

export default charts;
