//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {text:'Cortar cebolla',completed:false},
  {text:'Tomar el curso intro a React',completed:false},
  {text:'Hacer tareas pendientes',completed:false},
];

function App() {
  return(
    <React.Fragment>
      <div className="content-admins-task">
        <TodoCounter/>
        <TodoSearch/>
        <CreateTodoButton/>
      </div>
      <div className="content-list-task">
        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))}
        </TodoList>
      </div>
    </React.Fragment>
  )
}

export default App;