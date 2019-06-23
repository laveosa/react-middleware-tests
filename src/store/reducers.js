import { combineReducers } from "redux";
import StudentReducer from "./students/reducer";
import TicherReducer from "./tichers/reducer";

export default combineReducers({
  students: StudentReducer,
  tichers: TicherReducer
});
