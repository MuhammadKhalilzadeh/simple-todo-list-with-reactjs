import React from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="WHAT IS THE TASK TODAY?"
      />
      <button type="submit" className="todo-btn">
        ADD TASK
      </button>
    </form>
  );
};

export default TodoForm;
