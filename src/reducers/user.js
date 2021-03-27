import { getUser } from "../api/user";
import { userBody, loginUrl } from "../helpers/apiHelpers/user";

const SET_COUNTER = "SET_COUNTER";

const setCounter = (count) => ({
  type: SET_COUNTER,
  count,
});

const init = () => async (dispatch, getstate) => {
  //   console.log(userBody, loginUrl);
  let a = performance.now();
  const user = await getUser(loginUrl, userBody);
  let b = performance.now();

  console.log(a - b, {user});
  dispatch(setCounter(1));
};

export const defaultState = {
  count: 0,
};

export const ACTIONS = {
  init,
};

function user(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNTER:
      return Object.assign({}, state, {
        count: action.count,
      });
    default:
      return state;
  }
}

export default user;
