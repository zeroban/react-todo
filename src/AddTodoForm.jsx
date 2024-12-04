import { useState } from "react";

function AddTodoForm({onAddTodo}) {

  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value; // pulls the current value in the input box
    setTodoTitle(newTodoTitle); //updates the state
  }

  function handleAddTodo(event) {
    event.preventDefault(); // Prevent default form submit behavior
    onAddTodo({ title: todoTitle, id: Date.now() }); // will pass an object and the unique id (using Date.now() for the time being later on will update)
    console.log(todoTitle); // logging the value to the console
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label>
      <input type="text" id="todoTitle" name="title" 
      value={todoTitle} // Binds the state to the input box
      onChange={handleTitleChange} // binds the handleTitleChange function to the input
      /> 
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;