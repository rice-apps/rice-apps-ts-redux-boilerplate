import React from 'react'
import { Todo } from '../utils/types';

type Props = {
    todosCategory: String,
    filteredTodos: Todo[],
    bgColor: string,
    toggleTodo: (id: number) => void
}

const TodoDisplay: React.FC<Props> = ({todosCategory, filteredTodos, bgColor, toggleTodo}: Props) => (
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

export default TodoDisplay;