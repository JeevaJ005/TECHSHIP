let studentName = "RAYAN" , rollNumber = 101;
let maths = 90,science = 92,english = 90 ,computer = 90,socialScience = 90;
let total = maths +science +english +computer +socialScience;
let average = total / 5,percent = (total / 500) * 100, grade;
if (percent >= 90) {
    grade = "A";
} else if (percent >= 80) {
    grade = "B";
} else if (percent >= 70) {
    grade = "C";
} else if (percent >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("STUDENT RESULT REPORT :"),console.log("Name:", studentName),
console.log("Roll Number:", rollNumber),console.log("Maths:", maths),
console.log("Science:", science),console.log("English:", english),
console.log("Computer:", computer),console.log("Social Science:", socialScience),
console.log("Total:", total),console.log("Average:", average),
console.log("Percentage:", percent + "%");console.log("Grade:", grade);