import {ACTION_TYPES, TodoActionTypes} from './ActionTypes';

export const addTodo = (description: String, deadline: String) => {
    let id = Math.floor(Math.random() * 100);
    let completed = false;
    let todo = {
        id,
        description,
        deadline,
        completed
    };
    return {
        type: ACTION_TYPES.ADD_TODO,
        todo
    };
}

export const removeTodo = (ID: number) => {
    return {
        type: ACTION_TYPES.REMOVE_TODO,
        ID
    };
}

export const toggleTodo = (ID: number) => {
    return {
        type: ACTION_TYPES.TOGGLE_TODO,
        ID
    };
}