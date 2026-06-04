const button = document.getElementById("themeBtn");

button.addEventListener("click", function () {

    // check current background
    if (document.body.style.backgroundColor === "black") {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    } else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

});