import React from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = React.useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="UPDATE TASK"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        UPDATE
      </button>
    </form>
  );
};

export default EditTodoForm;
