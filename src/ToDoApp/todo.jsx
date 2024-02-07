import { useContext } from "react";
import { ToDoContext } from "../ToDoContext/context";
import CheckboxLabel from "../Component/checkbox";
import TextInput from "../Component/textInput";

const ToDoApp = () => {
  const {
    todos,
    todoTitle,
    setTodoTitle,
    todoTime,
    setTodoTime,
    addTodo,
    showCompleted,
    toggleCompleted,
  } = useContext(ToDoContext);

  return (
    <main>
      <header>
        <h1>ToDo App </h1>
      </header>

      <section>
        <div className="add-todo">
          <TextInput
            name={"title"}
            value={todoTitle}
            placeholder={"Add new task..."}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <TextInput
            name={"time"}
            value={todoTime}
            placeholder={"Start time (e.g. 3pm)"}
            onChange={(e) => setTodoTime(e.target.value)}
          />

          <button className="add-button" onClick={addTodo}>
            Add
          </button>
        </div>

        <div className="todo-list">
          {todos
            .filter((todo) => (showCompleted ? true : !todo.completed))
            .map((todo) => (
              <p>{todo.title}</p>
            ))}
        </div>

        <div className="toggle-completed">
          <CheckboxLabel
            label={"Show Completed"}
            clickFunction={toggleCompleted}
          />
        </div>
      </section>
    </main>
  );
};
export default ToDoApp;
