import React from "react";

export default function Todo({ todo, toggleTodo, deleteTodo }) {
  const getStyle = () => {
    return {
      textDecoration: todo.complete ? "line-through" : "none",
    };
  };

  const handleToggle = () => {
    toggleTodo(todo.id)
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <div style={getStyle()}>
      <input type="checkbox" checked={todo.complete} onChange={handleToggle}/>
      {todo.name}
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
