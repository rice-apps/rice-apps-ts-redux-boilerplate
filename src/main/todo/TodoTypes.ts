import {Todo, MainActionInterface} from "../utils/BaseTypes"

export interface AddTodoInterface extends MainActionInterface {
    todo: Todo
}

export interface RemoveTodoInterface extends MainActionInterface {
    ID: number
}

export interface ToggleTodoInterface extends MainActionInterface {
    ID: number
}

// Union interface

export type TodoActionTypes = AddTodoInterface | RemoveTodoInterface | ToggleTodoInterface