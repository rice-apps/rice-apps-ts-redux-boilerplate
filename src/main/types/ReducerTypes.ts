import { Todo } from "../utils/types";

interface TodoReducer {
    todos: Todo[]
}

interface BackgroundReducer {
    color: String
}

export interface State {
    TodoReducer: TodoReducer,
    BackgroundReducer: BackgroundReducer
}