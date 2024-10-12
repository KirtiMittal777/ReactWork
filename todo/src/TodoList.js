import React from 'react'
import './TodoList.css';

const TodoList = ({todoList, deleteTodo}) => {
 
  return (
    <div>
      <h1 className="todo-heading">TODO</h1>
      <hr/>
       <ul>
        {
            todoList.length > 0 ? ( 
                todoList.map(todo => (
                    <div key={todo.id} className="todo-list">
                        <li>{todo.item}</li>
                        <button className="todo-button" onClick={() => deleteTodo(todo.id)}>X</button>
                    </div>
                )) 
            )
            : (
              <p> Please add todo item to start</p>
            ) 
        }  
     </ul>
    </div>
  )
}

export default TodoList
