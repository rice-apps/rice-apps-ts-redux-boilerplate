import React from 'react'
import {connect} from 'react-redux';
import { toggleTodo } from '../actions/TodoActions';
import TodoDisplay from './TodoDisplay';
import { Todo } from '../utils/types';
import { State } from '../types/ReducerTypes';

type Props = {
    todos: Todo[],
    bgColor: string,
    toggleTodo: (id: number) => void
}

const IncompleteTodoDisplay: React.FC<Props> = ({todos, bgColor, toggleTodo}) => {
    let filteredTodos = todos.filter(todo => !todo.completed);
    return (<TodoDisplay 
    todosCategory={"Incomplete"}
    filteredTodos={filteredTodos} 
    bgColor={bgColor}
    toggleTodo={toggleTodo}
    />);
}

export default connect(
    (state: State) => ({
        todos: state.TodoReducer.todos,
        bgColor: state.BackgroundReducer.color, 
    }),
    (dispatch) => ({
        toggleTodo: (id: number) => dispatch(toggleTodo(id))
    })
)(IncompleteTodoDisplay as React.FC);