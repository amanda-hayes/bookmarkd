import React from 'react';

const List = (props) => {
    return (
        <div>
            <h2>My List</h2>
            <ul>
                {
                    props.listItem.map((item, index) => {
                        return <li>
                            {item.title}
                            <button onClick={() => props.removeFromList(index)}>Remove from List</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default List;