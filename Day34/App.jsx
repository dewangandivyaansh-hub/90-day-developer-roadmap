import { useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoItem from "./TodoItem";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>

      <Header />

      <h1>📝 React To-Do App</h1>

      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>

        {tasks.map((item, index) => (
          <TodoItem
            key={index}
            task={item}
          />
        ))}

      </ul>

    </div>
  );
}

export default App;