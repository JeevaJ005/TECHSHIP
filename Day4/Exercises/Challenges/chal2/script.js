document.getElementById("password").addEventListener("keyup", function () {

    let pwd = this.value;

    if (pwd.length < 6) {
        document.getElementById("strength").innerText = "Weak";
    }
    else if (pwd.length < 10) {
        document.getElementById("strength").innerText = "Medium";
    }
    else {
        document.getElementById("strength").innerText = "Strong";
    }

});