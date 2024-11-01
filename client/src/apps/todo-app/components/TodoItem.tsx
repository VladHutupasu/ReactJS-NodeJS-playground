import { ITodoItem } from "../models/ITodoItem";

export default function TodoItem({
  item,
  handleDelete,
  handleDone,
}: {
  item: ITodoItem;
  handleDelete: (todo: ITodoItem) => void;
  handleDone: (todo: ITodoItem) => void;
}) {
  return (
    <div>
      <span
        style={{
          cursor: "pointer",
          textDecoration: item.done ? "line-through" : "",
        }}
        onClick={() => handleDone(item)}
      >
        {item.name}
      </span>
      <button
        onClick={() => handleDelete(item)}
        style={{
          marginLeft: "10px",
          padding: "5px",
        }}
      >
        x
      </button>
    </div>
  );
}
