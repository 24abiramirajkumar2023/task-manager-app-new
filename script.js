// ----------------------
// Register Form Validation
// ----------------------

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("errorMessage");

        if (!name || !email || !password) {
            errorMessage.textContent = "All fields are required";
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            errorMessage.textContent = "Invalid email format";
            return;
        }

        errorMessage.style.color = "green";
        errorMessage.textContent = "Registration Successful!";
    });
}