function login(){

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u =>
            u.email === email &&
            u.password === password
    );

    if(user){

        localStorage.setItem(
            "loggedInUser",
            user.name
        );

        window.location.href =
            "landing.html";
    }
    else{
        alert("Invalid Credentials");
    }
}