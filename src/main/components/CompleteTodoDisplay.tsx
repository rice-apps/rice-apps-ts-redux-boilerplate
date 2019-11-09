import React from 'react'
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/TodoActions';
import TodoDisplay from './TodoDisplay';
import { State } from '../types/ReducerTypes';
import { Todo } from '../utils/types';

type Props = {
    todos: Todo[],
    bgColor: string,
    toggleTodo: (id: number) => void
}

const CompleteTodoDisplay: React.FC<Props> = ({todos, bgColor, toggleTodo}: Props) => {
    let filteredTodos = todos.filter(todo => todo.completed);
    return (<TodoDisplay 
    todosCategory={"Complete"}
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
    (dispatch) => {
        return {
            toggleTodo: (id: number) => dispatch(toggleTodo(id))
        }
    }
)(CompleteTodoDisplay as React.FC);