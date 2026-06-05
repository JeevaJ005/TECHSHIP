const employees = [
    { name: "OLIVER", department: "IT" },
    { name: "REGIE", department: "HR" },
    { name: "JUSTIN", department: "IT" }
];

console.log("Employee Names:");

employees.forEach(emp => {
    console.log(emp.name);
});

const itEmployees = employees.filter(
    emp => emp.department === "IT"
);

console.log("IT Employees:");
console.log(itEmployees);
