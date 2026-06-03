const studentList = [
  { id: 101, name: "John", age: 20, course: "BCA", marks: 85 },
  { id: 102, name: "Sarah", age: 19, course: "BSc CS", marks: 72 },
  { id: 103, name: "Alex", age: 21, course: "BCA", marks: 95 },
  { id: 104, name: "Maria", age: 20, course: "BCA", marks: 60 },
  { id: 105, name: "David", age: 22, course: "BSc IT", marks: 78 }
];

//

// 2. Average marks of each student
studentList.forEach(s => {
  console.log(`${s.name} Average: ${s.marks}`);
});

// 3. Students above 75
const above75 = studentList.filter(s => s.marks > 75);
console.log("Above 75:", above75);

// 4. Highest scorer
const topStudent = studentList.reduce((max, s) =>
  s.marks > max.marks ? s : max
);

console.log("Top Student:", topStudent.name);

// 5. Report
console.log("===== STUDENT REPORT =====");

studentList.forEach(s => {
  const status =
    s.marks >= 85 ? "Excellent" :
    s.marks >= 70 ? "Good" : "Average";

  console.log(`
ID: ${s.id}
Name: ${s.name}
Course: ${s.course}
Marks: ${s.marks}
Status: ${status}
  `);
});