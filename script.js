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