import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing TodoList
import TodoList from './TodoList';
// importing TodoForm
import AddTodoForm from './AddTodoForm';



function App() {

    // the "todoList" will hold the array of todos and the "setTodoList" will update the state when we add or manipulate the todos 
  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);

  }

{/* THis is how you add a comment. Also imported TodoList */}

  return (
    <>
      <h1>To-Do List</h1>
      
      <AddTodoForm onAddTodo={addTodo}/> {/* will pass the addTodo function as a prop */}
      
      { /* Passed the todoList state as a prop to the TodoList compnent */ }
      <TodoList todoList={todoList} />
    </>
  );
}

export default App
