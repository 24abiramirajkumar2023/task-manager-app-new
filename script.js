const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("errorMessage");

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                errorMessage.style.color = "green";
                errorMessage.textContent = "Registration Successful!";
            } else {
                errorMessage.style.color = "red";
                errorMessage.textContent = data.message;
            }
        } catch (error) {
            errorMessage.style.color = "red";
            errorMessage.textContent = "Server connection failed";
        }
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const loginMessage = document.getElementById("loginMessage");

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                loginMessage.style.color = "green";
                loginMessage.textContent = "Login Successful!";

                localStorage.setItem("user", JSON.stringify(data));

                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1000);
            } else {
                loginMessage.style.color = "red";
                loginMessage.textContent =
                    data.message || "Invalid Email or Password";
            }
        } catch (error) {
            loginMessage.style.color = "red";
            loginMessage.textContent = "Server connection failed";
        }
    });
}
const taskForm = document.getElementById("new-task-form");

if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskName = document.getElementById("task-name").value;
        const taskStatus = document.getElementById("task-status").value;

        const taskList = document.getElementById("task-list");

        const taskBox = document.createElement("div");
        taskBox.classList.add("task-box");

taskBox.innerHTML = `
    <h3>${taskName}</h3>
    <p>Status: <strong>${taskStatus}</strong></p>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    `;
const editBtn = taskBox.querySelector(".edit-btn");

editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", taskName);

    if (newTask) {
        taskBox.querySelector("h3").textContent = newTask;
    }
});

const deleteBtn = taskBox.querySelector(".delete-btn");

deleteBtn.addEventListener("click", () => {
    taskBox.remove();
});
taskList.appendChild(taskBox);

taskForm.reset();
    });
}
