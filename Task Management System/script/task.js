const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    window.location.href = "index.html";
}

const taskKey = currentUser.email + "_tasks";
let tasks = JSON.parse(localStorage.getItem(taskKey)) || [];

function saveTasks(){
    localStorage.setItem(taskKey, JSON.stringify(tasks));
}

function displayTasks(data = tasks){

const taskList =
document.getElementById("taskList");

taskList.innerHTML = "";

data.forEach(task=>{

taskList.innerHTML += `

<div class="task">

<h3>${task.title}</h3>

<p>${task.description}</p>

<p>Status:
${task.status}</p>

<button onclick="editTask(${task.id})">
Edit
</button>

<button onclick="deleteTask(${task.id})">
Delete
</button>

</div>

`;

});

}

document
.getElementById("addBtn")
.addEventListener("click",()=>{

const title =
document.getElementById("title");

const description =
document.getElementById("description");

const status =
document.getElementById("status");

if(
title.value === "" ||
description.value === ""
){
alert("Fill all fields");
return;
}

const task = {

id:Date.now(),

title:title.value,

description:description.value,

status:status.value

};

tasks.push(task);

saveTasks();

displayTasks();

title.value="";
description.value="";
});
function deleteTask(id){
    tasks = tasks.filter(
        task => task.id !== id
    );

    saveTasks();
    displayTasks();
}
function editTask(id){

    const task = tasks.find(
        task => task.id === id
    );

    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("status").value = task.status;

    deleteTask(id);
}
document.getElementById("search")
.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(value)
    );

    displayTasks(filtered);
});
document.getElementById("filter")
.addEventListener("change", function(){

    const status = this.value;

    if(status === "All"){
        displayTasks();
    }else{

        const filtered = tasks.filter(
            task => task.status === status
        );

        displayTasks(filtered);
    }
});
function logout(){
    window.location.href = "index.html";
}
displayTasks();