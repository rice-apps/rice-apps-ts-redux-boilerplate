import React from 'react'
import { Todo } from '../utils/types';


type Props = {
    todosCategory: String,
    filteredTodos: Todo[],
    bgColor: string,
    toggleTodo: (id: number) => void
}

const TodoDisplay = ({todosCategory, filteredTodos, bgColor, toggleTodo}: Props) => {
    console.log(toggleTodo);
    return (
        <div style={{backgroundColor: bgColor}}>
            <h1>{todosCategory}</h1>
            <ul>
                {filteredTodos.map(todo => (
                    <li 
                    key={todo.ID}
                    onClick={() => toggleTodo(todo.ID)}
                    >
                    {todo.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoDisplay;