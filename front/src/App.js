import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import useFetch from "use-http";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [request, response] = useFetch("http://localhost:1234");

  useEffect(() => {
    (async () => {
      const initialTodos = await request.get("/todos");
      if (response.ok) setTodos(initialTodos);
    })();
  }, []);

  const saveTodo = async todoText => {
    const trimmedText = todoText.trim();

    if (trimmedText.length > 0) {
      let newTodo = await request.post("/todos", { title: trimmedText });

      if (response.ok) {
        todos.push(newTodo);
        setTodos([...todos]);
      }
    }
  };
  const deleteTodo = async todoIndex => {
    const todo = todos[todoIndex];
    await request.delete(`/todos/${todo._id}`);

    if (response.ok) {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos([...newTodos]);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="todolist not-done">
              <h1>Todos DevC</h1>
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
