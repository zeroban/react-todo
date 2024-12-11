import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing TodoList
import TodoList from './TodoList';
// importing TodoForm
import AddTodoForm from './AddTodoForm';


function useSemiPersistentState () {

  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");  // Will look in localStorage for the value of "savedTodoList". Will be a string
    if (savedTodoList) {
      return JSON.parse(savedTodoList); // if "savedTodoList exists it will pase the string"
  } else {
      return []; // Will return an empty array if it doesn't exist
  }
});

useEffect(() => {
  localStorage.setItem("savedTodoList", JSON.stringify(todoList)); // Will update local storage
}, [todoList]); 


return [todoList, setTodoList]; // Returns state and its setter


}


function App() {

    // the "todoList" will hold the array of todos and the "setTodoList" will update the state when we add or manipulate the todos 
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);

  }

{/* THis is how you add a comment. Also imported TodoList */}

  return (
    /* Not sure if I was supposed to use "<React.Fragment>" of f the short hand version "<> and </>" is fine so I left it */
    <>
      <h1>To-Do List</h1>
      
      <AddTodoForm onAddTodo={addTodo}/> {/* will pass the addTodo function as a prop */}
      
      { /* Passed the todoList state as a prop to the TodoList compnent */ }
      <TodoList todoList={todoList} />
    </>
  );
}

export default App
