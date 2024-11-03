import { useState } from "react";
import { ITodoItem } from "../models/ITodoItem";

export default function Form({
  todos,
  setTodos,
}: {
  todos: ITodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
}) {
  const emptyTodo = { name: "", done: false };
  const [todo, setTodo] = useState<ITodoItem>(emptyTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo(emptyTodo);
    console.log("Submitting form!");
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
      }}
      onSubmit={handleSubmit}
    >
      <input
        style={{ flex: "1" }}
        onChange={(e) => setTodo({ ...emptyTodo, name: e.target.value })}
        type="text"
        name="todo-name"
        placeholder="Enter todo item..."
        value={todo.name}
      />
      <button type="submit">Add</button>
    </form>
  );
}
