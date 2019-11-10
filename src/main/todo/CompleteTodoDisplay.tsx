import React from 'react'
import {connect} from 'react-redux';
import {toggleTodo} from './TodoActions';
import TodoDisplay from './TodoDisplay';
import { Todo } from '../utils/BaseTypes';
import { AppState } from '../RootReducer';

type Props = {
    todos: Todo[],
    bgColor: string,
    toggleTodo: (id: number) => void
}

const CompleteTodoDisplay: React.FC<Props> = ({todos, bgColor, toggleTodo}: Props) => (
    <TodoDisplay 
        todosCategory={"Complete"}
        filteredTodos={todos.filter(todo => todo.completed)} 
        bgColor={bgColor}
        toggleTodo={toggleTodo} 
    />
);

export default connect(
    (state: AppState) => ({
        todos: state.todoState.todos,
        bgColor: state.bgState.color, 
    }),
    (dispatch) => {
        return {
            toggleTodo: (id: number) => dispatch(toggleTodo(id))
        }
    }
)(CompleteTodoDisplay);