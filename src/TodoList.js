import React from 'react';
import './StylesGeneral.css';
import './TodoList.css';

function TodoList (props) {
    return (
        <section>
            <h2>Lista de tareas</h2>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };