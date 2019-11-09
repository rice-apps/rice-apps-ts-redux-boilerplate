import { combineReducers } from "redux";
// Import your reducers here
import TodoReducer from './TodoReducer';
import BackgroundReducer from './BackgroundReducer';

const Reducer = combineReducers({
  TodoReducer, BackgroundReducer
  // Add your reducers here
});

export default Reducer;
