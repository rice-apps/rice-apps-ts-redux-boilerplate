import React, { useState } from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../actions/TodoActions';

type Props = {
    addTodo: (description: string, deadline: string) => void
}

const NewTodoControl: React.FC<Props> = ({addTodo}: Props) => {
    const [inputText, setInputText] = useState("");
    const childStyle = {display: 'inline-block', margin:8};
    return (
        <div>
            <input 
                style={childStyle} type="text" 
                value={inputText} 
                onChange={event => setInputText(event.target.value)}
            />
            <button style={childStyle} 
            onClick={() => {
                if (inputText && inputText !== "")
                    addTodo(inputText, 'right now')
            }}>
            Add Task!
            </button>
        </div>
    );
};

export default connect(
    () => ({}),
    (dispatch) => ({
        addTodo: (description: string, deadline: string) => dispatch(addTodo(description, deadline))
    })
)(NewTodoControl);