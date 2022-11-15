import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import projectReducer from "./projectRaducer";

const rootReducer = combineReducers({
  todoReducer,
  projectReducer,
});

export default rootReducer;
