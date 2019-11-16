import BG_COLOR from "../utils/BackgroundColors";
import { Todo } from "./BaseTypes";
import { Chart } from "./BaseTypes";


export enum ACTION_TYPES {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_COLOR = "SET_COLOR"
}

export enum ACTION_TYPES_CHART {
    ADD_CHARTS = "ADD_CHART",
    SET_COLOR = "SET_COLOR"
}

interface MainActionInterface {
    type: ACTION_TYPES,
}

interface MainActionInterface2 {
    type: ACTION_TYPES_CHART,
}

export interface AddTodoInterface extends MainActionInterface {
    todo: Todo
}

export interface AddChartInterface extends MainActionInterface2 {
    chart: Chart
}

export interface RemoveTodoInterface extends MainActionInterface {
    ID: number
}

export interface ToggleTodoInterface extends MainActionInterface {
    ID: number
}

export interface SetColorInterface extends MainActionInterface {
    color: BG_COLOR
}

// Union interface

export type TodoActionTypes = AddTodoInterface | RemoveTodoInterface | ToggleTodoInterface
export type ChartActionTypes = AddChartInterface
export type BackgroundActionTypes = SetColorInterface