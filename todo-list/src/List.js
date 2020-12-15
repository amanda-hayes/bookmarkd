import React from 'react';

const List = (props) => {
    return (
        <div>
            <h2>Let's Get to Work</h2>
            <ul>
                {
                    props.listItem.map((item, index) => {
                        return <li>
                            {item.title}
                            <button onClick={() => alert("Yaaaas Queen!")}>Completed</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default List;