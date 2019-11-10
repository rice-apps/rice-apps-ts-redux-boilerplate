export enum ACTION_TYPES {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_COLOR = "SET_COLOR"
}

export interface MainActionInterface {
    type: ACTION_TYPES,
}

export type Todo = {
    ID: number,
    description: string,
    deadline: string,
    completed: boolean
}
