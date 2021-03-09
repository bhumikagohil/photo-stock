import { combineReducers } from "redux";

import savedReducer from "./saved/saved-reducer";

const rootReducer = combineReducers({
  saved: savedReducer,
});

export default rootReducer;
