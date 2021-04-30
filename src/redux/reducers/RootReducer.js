import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import TaskReducer from "./TaskReducer";

const RootReducer = combineReducers({
    CounterReducer: CounterReducer,
    TaskReducer: TaskReducer
});
export default RootReducer;