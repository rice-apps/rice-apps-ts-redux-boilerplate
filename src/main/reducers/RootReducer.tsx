import { combineReducers } from "redux";
import TodoReducer from './TodoReducer';
import BackgroundReducer from './BackgroundReducer';

const RootReducer = combineReducers({
  todoState: TodoReducer, 
  bgState: BackgroundReducer
});

export type AppState = ReturnType<typeof RootReducer>
export default RootReducer
