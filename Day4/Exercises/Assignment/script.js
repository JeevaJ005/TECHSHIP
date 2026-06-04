const form = document.getElementById("regForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let college = document.getElementById("college").value.trim();
    let course = document.getElementById("course").value.trim();

    // clear errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("collegeError").innerText = "";
    document.getElementById("courseError").innerText = "";

    let valid = true;

    // validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits";
        valid = false;
    }

    if (college === "") {
        document.getElementById("collegeError").innerText = "College required";
        valid = false;
    }

    if (course === "") {
        document.getElementById("courseError").innerText = "Course required";
        valid = false;
    }

    // success
    if (valid) {

        document.getElementById("message").innerText =
            "STUDENT REGISTRATION SUCCESSFUL";

        document.getElementById("card").innerHTML = `
            <div class="card">
                <h3>Student Details</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>College:</b> ${college}</p>
                <p><b>Course:</b> ${course}</p>
            </div>
        `;

        form.reset();
    }
});