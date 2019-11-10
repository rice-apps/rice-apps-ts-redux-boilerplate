import React from 'react'
import {connect} from 'react-redux';
import { toggleTodo } from './TodoActions';
import TodoDisplay from './TodoDisplay';
import { AppState } from '../RootReducer';
import { Todo } from '../utils/BaseTypes';

type Props = {
    todos: Todo[],
    bgColor: string,
    toggleTodo: (id: number) => void
}

const IncompleteTodoDisplay: React.FC<Props> = ({todos, bgColor, toggleTodo}: Props) => (
        <TodoDisplay todosCategory={"Incomplete"}
        filteredTodos={todos.filter(todo => !todo.completed)} 
        bgColor={bgColor}
        toggleTodo={toggleTodo}
    />
);

export default connect(
    (state: AppState) => ({
        todos: state.todoState.todos,
        bgColor: state.bgState.color, 
    }),
    (dispatch) => ({
        toggleTodo: (id: number) => dispatch(toggleTodo(id))
    })
)(IncompleteTodoDisplay);