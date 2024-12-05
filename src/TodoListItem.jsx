function TodoListItem (props) {
    // multiple-line return statement
    return (
        <div>
          <li> {props.todo.title} </li>
        </div>
      );

}

export default TodoListItem;