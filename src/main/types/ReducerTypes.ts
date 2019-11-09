import { Todo } from "../utils/types";
import BG_COLOR from "../utils/BackgroundColors";

interface TodoReducer {
    todos: Todo[]
}

interface BackgroundReducer {
    color: BG_COLOR
}

export interface State {
    todoState: TodoReducer,
    bgState: BackgroundReducer
}