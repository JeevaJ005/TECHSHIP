document.getElementById("addBtn").addEventListener("click", function () {

    let input = document.getElementById("itemInput");
    let value = input.value.trim();

    // check empty input
    if (value === "") {
        alert("Please enter something");
        return;
    }

    // create list item
    let li = document.createElement("li");
    li.innerText = value;

    // add click to remove item
    li.addEventListener("click", function () {
        li.remove();
    });

    // add to list
    document.getElementById("list").appendChild(li);

    // clear input
    input.value = "";

});