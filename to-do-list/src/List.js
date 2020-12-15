import React from 'react'

const List = (props) => {
    return (
        <div>
            <h2>My Tasks</h2>
            <ul>
                {
                    props.tasks.map((title, index) => {
                        return <li>
                            {title.title}
                            <button onClick={() => props.removeFromList(index)}>Remove from List</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default List;