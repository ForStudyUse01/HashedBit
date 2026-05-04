import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (!input.trim()) return;

    // add + sort in one step
    const updatedTasks = [...tasks, input].sort((a, b) =>
      a.localeCompare(b)
    );

    setTasks(updatedTasks);
    setInput(""); // clear input
  };

  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((t) => t !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo List</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Add Button */}
      <button onClick={handleAdd}>Add Task</button>

      {/* List */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => handleDelete(t)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;