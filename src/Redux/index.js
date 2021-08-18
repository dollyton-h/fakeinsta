import { combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,

}); 

export default rootReducer;
