import React from 'react';
import './TodoItem.css';

function TodoItem (props) {
    return (
        <li>
            <span className="state">
                
            </span>
            <p>
                {props.text}
            </p>
            <span className="close">
                x
            </span>
        </li>
    );
}

export { TodoItem };