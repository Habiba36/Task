// Get references to HTML elements
const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listener for the task form submission
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    const task = taskInput.value.trim();
    if (task !== '') {
        addTask(task);
        taskInput.value = '';
    }
});

// Initial rendering of tasks
renderTasks();