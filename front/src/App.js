import React, { Component, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveTodo = todoText => {
    const trimmedText = todoText.trim();

    if (trimmedText.length > 0) {
      setTodos([...todos, trimmedText]);
    }
  };
  const deleteTodo = todoIndex => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);

    setTodos(newTodos);
    setTodos(newTodos);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="todolist not-done">
              <h1>Todos</h1>
              <TodoForm saveTodo={saveTodo} />
              <hr />
              <TodoList todos={todos} deleteTodo={deleteTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
