import { createContext, useState } from "react";
export const ToDoContext = createContext();

export const ToDoContextHandler = ({ children }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTime, setTodoTime] = useState("");
  const [todos, setTodos] = useState([
    { id: 1703846031824, title: "Read", time: "5pm", completed: false },
    { id: 1703846438230, title: "Write", time: "6pm", completed: true },
  ]);

  const addTodo = () => {
    // console.log(todoTitle, todoTime);
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      time: todoTime,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };
  return (
    <ToDoContext.Provider
      value={{
        todos,
        setTodos,
        todoTitle,
        setTodoTitle,
        todoTime,
        setTodoTime,
        addTodo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
