function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault(); // Prevent default form submit behavior

    // Retrieve the value of the "title" 
    const todoTitle = event.target.title.value;

    console.log(todoTitle);

    props.onAddTodo(todoTitle);

    // clears the form input
    event.target.reset();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label>
      <input type="text" id="todoTitle" name="title" /> 
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;