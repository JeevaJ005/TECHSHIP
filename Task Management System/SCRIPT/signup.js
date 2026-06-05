console.log("signup.js is loaded");
function signup(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if(
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ){
        alert("All fields are required");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        name,
        email,
        password
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Registration Successful");

    window.location.href = "index.html";
}