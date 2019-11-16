import React from 'react'

type Props = {
    text: string
}

const Comment:React.FC<Props> = ({text}: Props) => {
    return (
        <div>
            <h3>{text}</h3>
        </div>
    )
}

export default Comment;