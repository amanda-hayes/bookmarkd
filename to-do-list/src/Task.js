import React from 'react'

const Task = ({ title, index }) => {
    return (
        <li>{title}
            <button onClick={() => addToList(index)}>Add to List</button>
        </li>

    )
}
export default Task;