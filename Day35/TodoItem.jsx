function TodoItem({ task, index, deleteTask, toggleComplete }) {

    return (
        <li className={task.completed ? "completed" : ""}>

            <span
                onClick={() => toggleComplete(index)}
            >
                {task.text}
            </span>

            <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
            >
                ❌
            </button>

        </li>
    );
}

export default TodoItem;