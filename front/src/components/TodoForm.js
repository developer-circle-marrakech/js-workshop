import React, { useState } from "react";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        setValue("");
      }}
    >
      <input
        className="form-control add-todo"
        placeholder="Add todo"
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
