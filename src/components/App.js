import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import Todos from "./Todos";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  

  const addTodo = () => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return[...prevTodos, { id: uuidv4(), name: name, complete: false} ]
    })
    todoNameRef.current.value = null
  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type="text" ref={todoNameRef} />
      <button onClick={addTodo}>Add Todo</button>
      <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
