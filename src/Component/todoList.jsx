import { useContext } from "react";
import { ToDoContext } from "../ToDoContext/context";

const TodoList = ({ data }) => {
  const { toggleCompleted, deleteTodo } = useContext(ToDoContext);

  return data?.map((todo) => (
    <div
      key={todo.id}
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <div>
        <p className="todo-text">{todo.title}</p>
        <p className="todo-time">{todo.time}</p>
      </div>
      <div className="actions">
        <button
          onClick={() => toggleCompleted(todo.id)}
          className="toggle-button"
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  ));
};
export default TodoList;
