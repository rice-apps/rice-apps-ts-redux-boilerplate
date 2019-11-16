import { Chart } from "../utils/types";
import { Todo } from "../utils/types";
import BG_COLOR from "../utils/BackgroundColors";

export interface TodoState {
    todos: Todo[]
}

export interface BackgroundState {
    color: BG_COLOR
}

export interface ChartState {
    chartList: Chart[]
}