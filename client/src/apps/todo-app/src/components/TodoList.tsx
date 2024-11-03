import { ITodoItem } from "../models/ITodoItem";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  handleDelete,
  handleDone,
}: {
  todos: ITodoItem[];
  handleDelete: (todo: ITodoItem) => void;
  handleDone: (todo: ITodoItem) => void;
}) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.name}
          item={todo}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
    </>
  );
}
