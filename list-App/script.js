// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Load tasks from local storage
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskToDOM);
};

// Save tasks to local storage
const saveTasks = () => {
    const tasks = Array.from(todoList.children).map(task => {
        return {
            name: task.firstChild.textContent,
            completed: task.classList.contains('completed')
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add task to DOM
const addTaskToDOM = task => {
    const li = document.createElement('li');
    li.textContent = task.name;

    // Mark as completed
    if (task.completed) {
        li.classList.add('completed');
    }

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
    };

    // Toggle completion on click
    li.onclick = () => {
        li.classList.toggle('completed');
        saveTasks();
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
};

// Add new task
todoForm.onsubmit = e => {
    e.preventDefault();
    const task = { name: todoInput.value, completed: false };
    addTaskToDOM(task);
    saveTasks();
    todoInput.value = '';
};

// Initialize tasks on load
document.addEventListener('DOMContentLoaded', loadTasks);
