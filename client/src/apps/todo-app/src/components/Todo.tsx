import { useState } from "react";
import { ITodoItem } from "../models/ITodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const handleDelete = (todoToDelete: ITodoItem) => {
    setTodos(todos.filter((todo) => todo.name !== todoToDelete.name));
  };

  const handleDone = (todoTomarkAsDone: ITodoItem) => {
    setTodos(
      todos.map((todo) =>
        todo.name === todoTomarkAsDone.name
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  };

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleDone={handleDone}
      />
    </>
  );
}
