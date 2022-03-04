import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Link } from "react-router-dom";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = "Todooly | The Todo App";
    const retrievePosts = async () => {
      const response = await fetch("http://localhost:5000/api/todos");
      const data = await response.json();

      setTodos(data);
    };

    retrievePosts();
  }, [todos]);

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="header-container">
        <h1 className="header">The app that tracks what to do.</h1>
      </div>
      <ul className="todos-container">
        {todos.map((todo) => {
          return (
            <li className="todo" key={todo._id}>
              <span className="todo-title">{todo.title}</span>
              <span className="todo-description">{todo.description}</span>
              <span className="todo-status">{todo.status}</span>
              <span className="todo-priority">{todo.priority}</span>
              <Link className="link" to={`edit/${todo._id}`}>
                Edit
              </Link>
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </button>
            </li>
          );
        })}
        <li className="create-button">
        <Link to='create' className='add'>
          <svg
            className='create-icon'
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#1c7ed6"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="128"
              r="96"
              fill="none"
              stroke="#1c7ed6"
              stroke-miterlimit="10"
              stroke-width="16"
            ></circle>
            <line
              x1="88"
              y1="128"
              x2="168"
              y2="128"
              fill="none"
              stroke="#1c7ed6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="128"
              y1="88"
              x2="128"
              y2="168"
              fill="none"
              stroke="#1c7ed6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
