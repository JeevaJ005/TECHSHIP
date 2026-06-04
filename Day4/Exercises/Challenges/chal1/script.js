function checkAge() {

    let age = Number(document.getElementById("age").value);

    if (age >= 18) {
        document.getElementById("result").innerText =
            "Eligible to Vote";
    } else {
        document.getElementById("result").innerText =
            "Not Eligible to Vote";
    }
}