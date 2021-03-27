import { getUser } from "../api/user";
import { userBody, loginUrl } from "../helpers/apiHelpers/user";

const SET_USER = "SET_USER";

const setUser = (token) => ({
  type: SET_USER,
  token,
});

const init = () => async (dispatch, getstate) => {
  //   console.log(userBody, loginUrl);
  let a = performance.now();
  const user = await getUser(loginUrl, userBody);
  const token = user && user.token;
  let b = performance.now();

  console.log(a - b, { token });
  dispatch(setUser(token));
};

export const defaultState = {
  userToken: null,
};

export const ACTIONS = {
  init,
};

function user(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        userToken: action.token,
      });
    default:
      return state;
  }
}

export default user;
