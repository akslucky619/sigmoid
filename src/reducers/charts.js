import { getChartData } from "../api/charts";
import { pieBody, pieUrl } from "../helpers/apiHelpers/pie";
import { barBody, barUrl } from "../helpers/apiHelpers/bar";
import { tableBody, tableUrl } from "../helpers/apiHelpers/table";

const SET_PIE_CHART_DATA = "SET_PIE_CHART_DATA";
const SET_TABLE_CHART_DATA = "SET_TABLE_CHART_DATA";
const SET_BAR_CHART_DATA = "SET_BAR_CHART_DATA";

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
    dispatch(setPieChartData(pieApiData));
    dispatch(setTableChartData(tableApiData));
    dispatch(setBarChartData(barApiData));
  } catch (error) {
    console.log(error);
  }
};

export const defaultState = {
  userToken: null,
  pieData: [],
  tableData: [],
  barData: [],
};

export const ACTIONS = {
  init,
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
    default:
      return state;
  }
}

export default charts;
