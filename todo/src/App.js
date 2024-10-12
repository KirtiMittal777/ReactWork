import './App.css';
import AddNewTodo from './AddNewTodo';
import TodoList from './TodoList';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'

function App() {
    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleTodoListSubmitButton = (e) => {
         e.preventDefault();

         const newTodoItem = {id: uuid(), item: newTodo};

         setTodoList([
           ...todoList,
           newTodoItem
         ]);
         setNewTodo("");
    }

    const deleteTodo = (id) => {
     const items  = todoList.filter(todo => todo.id !== id);
     setTodoList(items);
    }
   
  return (
    <div className="App">
        <AddNewTodo newTodo={newTodo} setNewTodo={setNewTodo} handleTodoListSubmitButton={handleTodoListSubmitButton} />
        <TodoList todoList={todoList} deleteTodo= {deleteTodo} />
    </div>
  );
}

export default App;
