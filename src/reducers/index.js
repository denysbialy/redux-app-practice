import { combineReducers } from "redux";
import countReducer from "./countReducer";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  count: countReducer,
  lang: langReducer,
  theme: themeReducer,
});

export default rootReducer;
