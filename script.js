// ----------------------
// Task Manager Functionality
// ----------------------
document.addEventListener('DOMContentLoaded', function () {}
document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('new-task-form');
  const taskList = document.getElementById('task-list');

  if (!taskForm || !taskList) {
    return;
  }

  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskNameInput = document.getElementById('task-name');
    const taskStatusInput = document.getElementById('task-status');

    if (!taskNameInput || !taskStatusInput) {
      return;
    }

    const taskName = taskNameInput.value.trim();
    const taskStatus = taskStatusInput.value;

    if (!taskName) {
      return;
    }

    const taskBox = document.createElement('div');
    taskBox.className = 'task-box';

    if (taskStatus === 'Completed') {
      taskBox.classList.add('completed');
    }

    taskBox.innerHTML = `
      <h3>${taskName}</h3>
      <p>Status: <strong>${taskStatus}</strong></p>
    `;

    taskList.appendChild(taskBox);
    taskNameInput.value = '';
    taskStatusInput.value = 'Pending';
  });
});
// ----------------------
// Fetch API - Load Tasks
// ----------------------
const loadButton = document.getElementById("loadDataBtn");
const loadButton = document.getElementById("loadDataBtn");
const apiTaskList = document.getElementById("api-data");
if (loadButton && apiTaskList) {

    loadButton.addEventListener("click", () => {

        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(response => response.json())
            .then(data => {

                apiTaskList.innerHTML = "";

                data.forEach(task => {

                    const li = document.createElement("li");
                    li.textContent = task.title;

                    apiTaskList.appendChild(li);

                });

            })
            .catch(error => {
                console.log(error);
            });

    });

}
// ----------------------
// Register Form Validation
// ----------------------
const registerForm = document.getElementById("registerForm");
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("errorMessage");

        if (name === "" || email === "" || password === "") {
            errorMessage.textContent = "All fields are required";
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            errorMessage.textContent = "Invalid email format";
            return;
        }

        errorMessage.textContent = "Registration Successful!";
    });

}