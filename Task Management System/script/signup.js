const signupForm = document.getElementById("signupForm");
const error = document.getElementById("error");

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

signupForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users"));

    if (!name || !email || !password || !confirmPassword) {
        error.textContent = "All fields are required";
        return;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match";
        return;
    }

    const exists = users.find(u => u.email === email);

    if (exists) {
        error.textContent = "Email already exists";
        return;
    }

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "index.html";
});