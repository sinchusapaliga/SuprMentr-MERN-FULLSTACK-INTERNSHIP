// Array of student objects
let students = [
  {
    name: "Asha",
    marks: [85, 90, 78]
  },
  {
    name: "Rahul",
    marks: [70, 88, 92]
  },
  {
    name: "Sneha",
    marks: [95, 80, 89]
  }
];

// Function to calculate average
function calculateAverage(marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return sum / marks.length;
}

// Display student averages
for (let i = 0; i < students.length; i++) {
  let avg = calculateAverage(students[i].marks);

  console.log("Student Name:", students[i].name);
  console.log("Average Marks:", avg);
  console.log("----------------------");
}