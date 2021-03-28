import { getUser } from "../api/user";
import { userBody, loginUrl } from "../helpers/apiHelpers/user";

const SET_USER = "SET_USER";

const setUser = (token) => ({
  type: SET_USER,
  token,
});

const init = () => async (dispatch, getstate) => {
  //   console.log(userBody, loginUrl);
  const token = localStorage.getItem("token");
  token === "undefined" ? dispatch(setUser(null)) : dispatch(setUser(token));
};

const login = (username, password) => async (dispatch, getstate) => {
  const userUpdateBody = { ...userBody, email: username, password: password };
  const user = await getUser(loginUrl, userUpdateBody);
  const token = user && user.token;
  console.log(token, "--------------");
  token === "undefined"
    ? localStorage.setItem("token", null)
    : localStorage.setItem("token", token);

  console.log({ username, password, userUpdateBody });
  dispatch(init());
  window.location.reload();
};

export const defaultState = {
  userToken: null,
};

export const ACTIONS = {
  init,
  login,
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
