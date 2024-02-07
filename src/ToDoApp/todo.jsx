import { ToastContainer } from 'react-toastify';
import "./todo.css";
import { useContext } from "react";
import { ToDoContext } from "../ToDoContext/context";
import CheckboxLabel from "../Component/checkbox";
import TextInput from "../Component/textInput";
import TodoList from "../Component/todoList";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ToDoApp = () => {
  const {
    todos,
    todoTitle,
    setTodoTitle,
    todoTime,
    setTodoTime,
    addTodo,
    showCompleted,
    toggleShowCompleted,
  } = useContext(ToDoContext);

  return (
    <main className="todo-app">
      <header>
        <h2>mark Your ToDo</h2>
      </header>
<ToastContainer/>

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
          <TodoList
            data={todos.filter((todo) =>
              showCompleted ? true : !todo.completed
            )}
          />
        </div>

        <div className="toggle-completed">
          <CheckboxLabel
            label={"Show Completed"}
            clickFunction={toggleShowCompleted}
          />
        </div>
      </section>

      <footer className="todo-footer">
        <a
          href="https://github.com/krunal002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large"/>
        </a>
        <a
          href="https://www.linkedin.com/in/krunal-mandlekar-106b95299"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large"/>
        </a>
      </footer>
    </main>
  );
};
export default ToDoApp;
