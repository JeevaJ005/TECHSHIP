
const loginForm = document.getElementById("loginForm");
const error = document.getElementById("error");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user =>
        user.email === email &&
        user.password === password
    );

    if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        window.location.href = "landing.html";
    } else {
        error.textContent = "Invalid Email or Password";
    }
});