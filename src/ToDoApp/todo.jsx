import { useContext } from "react";
import { ToDoContext } from "../ToDoContext/context";

const ToDoApp = () => {
  const { todos, todoTitle, setTodoTitle, todoTime, setTodoTime, addTodo } =
    useContext(ToDoContext);

  return (
    <main>
      <header>
        <h1>ToDo App </h1>
      </header>

      <section>
        <div className="add-todo">
          <input
            type="text"
            name="title"
            id="title"
            className="input-field"
            placeholder="Add new task..."
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />

          <input
            type="text"
            name="time"
            id="time"
            className="input-field"
            placeholder="Start time (e.g. 3pm)"
            value={todoTime}
            onChange={(e) => setTodoTime(e.target.value)}
          />

          <button className="add-button" onClick={addTodo}>
            Add
          </button>
        </div>

        <div className="todo-list">
          {todos.map((todo) => (
            <p>{todo.title}</p>
          ))}
        </div>
      </section>
    </main>
  );
};
export default ToDoApp;
