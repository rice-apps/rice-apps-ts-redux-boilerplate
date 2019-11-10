import {TodoActionTypes} from './TodoTypes';
import { Todo, ACTION_TYPES } from '../utils/BaseTypes';

export const addTodo = (description: string, deadline: string): TodoActionTypes => {
    let ID = Math.floor(Math.random() * 100);
    let todo : Todo = {
        ID,
        description,
        deadline,
        completed : false
    };
    return {
        type: ACTION_TYPES.ADD_TODO,
        todo
    };
}

export const removeTodo = (ID: number): TodoActionTypes => {
    return {
        type: ACTION_TYPES.REMOVE_TODO,
        ID
    };
}

export const toggleTodo = (ID: number): TodoActionTypes => {
    return {
        type: ACTION_TYPES.TOGGLE_TODO,
        ID
    };
}