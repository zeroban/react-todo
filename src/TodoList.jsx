import TodoListItem from "./TodoListItem";

// Created an array of objects  
const todoList = [
    {
      id:1,
      title: "Complete assignment 1"
    },
    {
      id:2,
      title: "Complete assignment 2"
    },
    {
      id:3,
      title: "Complete assignment 3"
    }
  ];

function TodoList () {
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