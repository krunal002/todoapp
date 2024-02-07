import { createContext, useState } from "react";
export const ToDoContext = createContext();

export const ToDoContextHandler = ({ children }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTime, setTodoTime] = useState("");
  const [todos, setTodos] = useState([
    { id: 1703846031824, title: "Read", time: "5pm", completed: false },
    { id: 1703846438230, title: "Write", time: "6pm", completed: true },
  ]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTodo = () => {
    if (todoTitle.trim() === "" || todoTime.trim() === "") {
      alert("Fill all the fields!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      time: todoTime,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodoTitle("");
    setTodoTime("");
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const toggleCompleted = (toggleId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === toggleId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (deleteId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== deleteId));
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        todoTitle,
        todoTime,
        showCompleted,
        setTodos,
        setTodoTitle,
        setTodoTime,
        addTodo,
        toggleShowCompleted,
        toggleCompleted,
        deleteTodo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
