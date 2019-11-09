import { ACTION_TYPES, TodoActionTypes } from "../actions/types";

const defaultTodoState = {
    todos: [
        {
            ID: 123,
            description: "Hello",
            deadline: "10/23",
            completed: false
        }
    ]
}

const TodoReducer = (state=defaultTodoState, action: TodoActionTypes) => {
    let newTodos;
    
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO:
            newTodos = [...state.todos, action.todo];
            return {...state, todos: newTodos};
        case ACTION_TYPES.REMOVE_TODO:
            newTodos = state.todos.filter(todo => todo.ID != action.ID);
            return {...state, todos: newTodos};
        case ACTION_TYPES.TOGGLE_TODO:
            // Find index of todo
            let idx = state.todos.findIndex(todo => todo.ID == action.ID);
            newTodos = [...state.todos];
            newTodos[idx].completed = !newTodos[idx].completed;
            return {...state, todos: newTodos};
        default:
            return {...state};
    }
}

export default TodoReducer;