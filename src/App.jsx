import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing TodoList
import TodoList from './TodoList';
// importing TodoForm
import AddTodoForm from './AddTodoForm';



function App() {
  const [count, setCount] = useState(0)

  const [newTodo, setNewTodo] = useState('');

{/* THis is how you add a comment. Also imported TodoList */}

  return (
    <>
      <h1>To-Do List</h1>
      
      <AddTodoForm onAddTodo={setNewTodo}/>
      
      
      <p>{newTodo}</p>

      <TodoList />
    </>
  );
}

export default App
