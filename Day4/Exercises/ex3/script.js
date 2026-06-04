const textArea = document.getElementById("textArea");

textArea.addEventListener("keyup", function () {

    let count = textArea.value.length;

    document.getElementById("count").innerText =
        "Characters Typed: " + count;

});