import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  console.log(task);
  return (
    <div className="todo">
      <p
        className={`${task.completed ? `completed` : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </p>
      <div className="todo-controls">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
