import { combineReducers } from "redux";

import user from "./user";
import charts from "./charts";

export default combineReducers({
  user,
  charts,
});
