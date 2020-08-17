import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, toggleTodo, deleteTodo }) {
  return todos.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  ));
}
