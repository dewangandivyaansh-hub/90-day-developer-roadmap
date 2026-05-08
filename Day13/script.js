let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    document.getElementById("taskCounter").innerText =
        `Total Tasks: ${tasks.length}`;

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span onclick="toggleTask(${index})">
                ${task.text}
            </span>

            <button onclick="deleteTask(${index})">❌</button>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();

    input.value = "";
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

renderTasks();

function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        tasks = [];

        saveTasks();
        renderTasks();
    }
}