import React from 'react'
import './AddNewTodo.css';

const AddNewTodo = ({newTodo, setNewTodo, handleTodoListSubmitButton}) => {
  return (
    <form onSubmit={handleTodoListSubmitButton} className="add-todo-form">
        <input placeholder="Enter Todo Item" className="add-todo-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} required/>
        <button className="add-todo-button" type="submit">Work List Items</button>
    </form>
  )
}

export default AddNewTodo
