const marks = [85, 72, 90, 60, 88];

const total = marks.reduce((a, b) => a + b, 0);
const highest = Math.max(...marks);
const lowest = Math.min(...marks);
const average = total / marks.length;

console.log("Total:", total);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average);