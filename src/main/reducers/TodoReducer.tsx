import { ACTION_TYPES, TodoActionTypes, AddTodoInterface, RemoveTodoInterface, ToggleTodoInterface } from "../types/ActionTypes";
import { State } from "../types/ReducerTypes";
import { defaultState } from "./index"

const TodoReducer = (state: State = defaultState, action: TodoActionTypes) => {
    let newTodos : Array<Todo>;
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO:
            newTodos = [...state.todos, (action as AddTodoInterface).todo];
            return {...state, todos: newTodos};
        case ACTION_TYPES.REMOVE_TODO:
            const removeID = (action as RemoveTodoInterface).ID
            newTodos = state.todos.filter(todo => todo.ID != removeID);
            return {...state, todos: newTodos};
        case ACTION_TYPES.TOGGLE_TODO:
            newTodos = [...state.todos];
            const toggleID = (action as RemoveTodoInterface).ID
            // Find index of todo
            let idx = state.todos.findIndex(todo => todo.ID == toggleID);
            newTodos[idx].completed = !newTodos[idx].completed;
            return {...state, todos: newTodos};
        default:
            return {...state};
    }
}

export default TodoReducer;