import { combineReducers } from "redux";
// Import your reducers here
import TodoReducer from './TodoReducer';
import BackgroundReducer from './BackgroundReducer';
import { State } from "../types/ReducerTypes";
import BG_COLOR from "../utils/BackgroundColors";

export const defaultState: State = {
  todoState: {
    todos: [
        {
            ID: 123,
            description: "Hello",
            deadline: "10/23",
            completed: false
        }
    ]
  },
  bgState: {
    color: BG_COLOR.BLUE_LIGHT
  }
}

const Reducer = combineReducers({
  TodoReducer, 
  BackgroundReducer
  // Add your reducers here
});

export default Reducer;
