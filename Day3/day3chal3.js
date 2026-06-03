
const employees = [
  { name: "EMMA", department: "IT" },
  { name: "BEN", department: "HR" },
  { name: "CLEO PATRA", department: "IT" }
];

console.log("All Employees:", employees.map(e => e.name));

const itEmployees = employees.filter(e => e.department === "IT");
console.log("IT Department:", itEmployees);
