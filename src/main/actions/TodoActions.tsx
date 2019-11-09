import {ACTION_TYPES, TodoActionTypes} from './ActionTypes';

export const addTodo = (description: String, deadline: String) => {
    let id = Math.random().toFixed(0);
    let completed = false;
    let todo = {
        id,
        description,
        completed
    };
    return {
        type: ACTION_TYPES.ADD_TODO,
        todo
    };
}

export const removeTodo = (ID: Int32Array) => {
    return {
        type: ACTION_TYPES.REMOVE_TODO,
        ID
    };
}

export const toggleTodo = (ID: Int32Array) => {
    return {
        type: ACTION_TYPES.TOGGLE_TODO,
        ID
    };
}