import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState;

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  });

  const addTodo = (todo) => {
    const newTodos = [
      todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true };
        }
        return todo;
      })
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task,
            isEditing: !todo.isEditing,
          }
        : todo
    );

    setTodos(newTodos);

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="todo-wrapper">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm todo={todo} editTask={editTask} />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapperLocalStorage;
