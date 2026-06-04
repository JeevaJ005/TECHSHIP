function addTask() {

    let task = document.getElementById("task").value;

    if (task === "") return;

    let li = document.createElement("li");

    li.innerText = task;

    // mark as completed
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    // delete on double click
    li.addEventListener("dblclick", function () {
        li.remove();
    });

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}