import React from "react";

const TodoList = ({ todos, deleteTodo }) => (
  <ul className="list-unstyled">
    {todos.map((todo, index) => (
      <li className="ui-state-default my-2" key={index.toString()}>
        <div className="  btn-xs float-right">
          <a
            className="btn btn-danger remove-item"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <span className="glyphicon glyphicon-remove"> Delete</span>
          </a>
        </div>
        <div className="checkbox">
          <label>
            <span style={{ fontSize: "20px" }}>{todo.title}</span>
          </label>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;
