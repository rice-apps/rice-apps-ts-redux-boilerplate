import { combineReducers } from "redux";
import TodoReducer from './TodoReducer';
import BackgroundReducer from './BackgroundReducer';
import ChartReducer from './ChartReducer';

const RootReducer = combineReducers({
  todoState: TodoReducer, 
  chartState: ChartReducer, 
  bgState: BackgroundReducer
});

export type AppState = ReturnType<typeof RootReducer>
export default RootReducer
