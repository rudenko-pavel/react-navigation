import { combineReducers } from "redux";

import menuitemsReducer from "./menuitemsReducer";
import menuselectedReducer from "./menuselectedReducer";

export default combineReducers({
  menuitems: menuitemsReducer,
  menuselected: menuselectedReducer
});
