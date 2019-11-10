import { combineReducers } from "redux";
import TodoReducer from './todo/TodoReducer';
import BackgroundReducer from './background/BackgroundReducer';

const RootReducer = combineReducers({
  todoState: TodoReducer, 
  bgState: BackgroundReducer
});

export type AppState = ReturnType<typeof RootReducer>
export default RootReducer
