const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {

    event.preventDefault(); // stops page refresh

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let college = document.getElementById("college").value;

    document.getElementById("card").innerHTML = `
        <div class="card">
            <h3>Student Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Course:</b> ${course}</p>
            <p><b>College:</b> ${college}</p>
        </div>
    `;

    form.reset(); // clears form after submit

});