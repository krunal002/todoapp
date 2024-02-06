const ToDoApp = () => {
  return (
    <main>
      <header>
        <h1>ToDo App</h1>
        <div className="add-todo">
          <input
            type="text"
            name="title"
            id="title"
            className="input-field"
            placeholder="Add new task..."
          />

          <input
            type="text"
            name="time"
            id="time"
            className="input-field"
            placeholder="Start time (e.g. 3pm)"
          />

          <button className="add-button">Add</button>
        </div>
      </header>
    </main>
  );
};
export default ToDoApp;
