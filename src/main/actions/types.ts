import BG_COLOR from "../utils/BackgroundColors";

export enum ACTION_TYPES {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_COLOR = "SET_COLOR"
}

interface MainActionInterface {
    type: ACTION_TYPES,
}

interface AddTodoInterface extends MainActionInterface {
    todo: any
}

interface RemoveTodoInterface extends MainActionInterface {
    ID: any
}

interface ToggleTodoInterface extends MainActionInterface {
    ID: any
}

interface SetColorInterface extends MainActionInterface {
    color: BG_COLOR
}

// Union interface

export type TodoActionTypes = AddTodoInterface & RemoveTodoInterface & ToggleTodoInterface
export type BackgroundActionTypes = SetColorInterface