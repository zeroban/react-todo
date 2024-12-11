import TodoListItem from "./TodoListItem";


// updated function to accept props
function TodoList ({todoList}) {
    return (
    <div>
        <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
          
        ))}
      </ul>
    </div>
    );
}

export default TodoList;