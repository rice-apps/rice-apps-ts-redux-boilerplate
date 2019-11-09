import { ACTION_TYPES, TodoActionTypes, AddTodoInterface, RemoveTodoInterface, ToggleTodoInterface } from "../types/ActionTypes";
import { TodoState } from "../types/ReducerTypes";
import { Todo } from "../types/BaseTypes";

const defaultState = {
    todos: [
        {
            ID: 123,
            description: "Hello",
            deadline: "10/23",
            completed: false
        }
    ]
};

const TodoReducer = (state: TodoState = defaultState, action: TodoActionTypes): TodoState => {
    let newTodos: Todo[] = [...state.todos];
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO:
            newTodos.push((action as AddTodoInterface).todo)
            break;
        case ACTION_TYPES.REMOVE_TODO:
            const removeID = (action as RemoveTodoInterface).ID
            newTodos = newTodos.filter(todo => todo.ID !== removeID);
            break;
        case ACTION_TYPES.TOGGLE_TODO:
            // Find index of todo
            const toggleID = (action as ToggleTodoInterface).ID
            let idx = newTodos.findIndex(todo => todo.ID === toggleID);
            newTodos[idx].completed = !newTodos[idx].completed;
            break;
        default:
            return {...state};
    }
    return {...state, todos: newTodos};
}

export default TodoReducer;