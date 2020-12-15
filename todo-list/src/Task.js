import React from 'react';

const Task = ({ title, complete, addToList, index }) => {
    return (
        <li>{title}| {complete} 
            <button onClick={() => addToList(index)}>Add to List</button>
        </li>

    )
}
export default Task;