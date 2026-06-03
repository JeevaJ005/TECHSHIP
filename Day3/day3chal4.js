const studentProfile = {
    personalInfo: {
        name: "BRIAN",
        age: 22
    },
    courseDetails: {
        course: "BCA"
    },
    skills: ["HTML", "CSS", "JavaScript"]
};
const {
    personalInfo: { name, age },
    courseDetails: { course },
    skills
} = studentProfile;
console.log(`
Student Profile Summary
-----------------------
Name   : ${name}
Age    : ${age}
Course : ${course}
Skills : ${skills.join(", ")}
`);