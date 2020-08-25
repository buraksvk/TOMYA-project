import { combineReducers } from "redux";
import { testRedux } from "./testRedux";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  testRedux,
  themeReducer,
});

export default rootReducer;
