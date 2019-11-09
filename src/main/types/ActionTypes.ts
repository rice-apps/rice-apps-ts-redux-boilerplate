import BG_COLOR from "../utils/BackgroundColors";
import { Todo } from "./StateTypes";

export enum ACTION_TYPES {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_COLOR = "SET_COLOR"
}

interface MainActionInterface {
    type: ACTION_TYPES,
}

export interface AddTodoInterface extends MainActionInterface {
    todo: Todo
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
export type BackgroundActionTypes = SetColorInterface