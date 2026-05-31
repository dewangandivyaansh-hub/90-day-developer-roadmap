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

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false
      }
    ]);

    setTask("");
  }

  function deleteTask(index) {

    const updatedTasks =
      tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  }

  function toggleComplete(index) {

    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
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
            index={index}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />

        ))}

      </ul>

    </div>
  );
}

export default App;