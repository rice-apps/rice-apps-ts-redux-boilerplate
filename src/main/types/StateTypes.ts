import BG_COLOR from "../utils/BackgroundColors";

export type Todo = {
    ID: number,
    description: string,
    deadline: string,
    completed: boolean
}

export interface TodoState {
    todos: Array<Todo>
}

export interface BackgroundState {
    color: BG_COLOR
}

export type State = TodoState & BackgroundState;