import React from 'react'
import NewTodoControl from './NewTodoControl'
import ColorSelectControl from './ColorSelectControl'

const TodoControls: React.FC = () => (
    <div style={{paddingTop: 8}}>
        <NewTodoControl />
        <ColorSelectControl />
    </div>
);

export default TodoControls;
