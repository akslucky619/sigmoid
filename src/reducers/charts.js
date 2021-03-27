import { getPieData, getTableData, getBarData } from "../api/charts";
import { pieBody, pieUrl } from "../helpers/apiHelpers/pie";
import { barBody, barUrl } from "../helpers/apiHelpers/bar";
import { tableBody, tableUrl } from "../helpers/apiHelpers/table";

const SET_USER = "SET_USER";

const setUser = (token) => ({
  type: SET_USER,
  token,
});

const init = (userToken) => async (dispatch, getstate) => {
  //   console.log(userBody, loginUrl);
  console.log({
    pieBody,
    barBody,
    tableBody,
    pieUrl,
    barUrl,
    tableUrl,
    userToken,
  });
  const pieData = await getPieData(pieUrl, pieBody, userToken);
  const tableData = await getTableData(tableUrl, tableBody, userToken);
  const barData = await getBarData(barUrl, barBody, userToken);
  console.log({ pieData });
  console.log({ tableData });
  console.log({ barData });

  //   dispatch(setUser(token));
};

export const defaultState = {
  userToken: null,
};

export const ACTIONS = {
  init,
};

function charts(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        userToken: action.token,
      });
    default:
      return state;
  }
}

export default charts;
