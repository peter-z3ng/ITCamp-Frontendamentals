// ========== TASK 1: Create a student object ==========
// Properties: name (string), age (number), grades (array of numbers)
let student = {
  name : "",
  age : 0,
  grades : []
};


// ========== TASK 2: Calculate average grade ==========
// Loop through grades array and return the average
function getAverage(grades) {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }
  
  average = sum / grades.length;
  return average;
}


// ========== TASK 3: Get letter grade ==========
// 90+ = "A", 80+ = "B", 70+ = "C", 60+ = "D", below = "F"
function getLetterGrade(average) {
  if (average > 90) {
    console.log("A");
  } else if (average > 80) {
    console.log("B");
  } else if (average > 70) {
    console.log("C");
  } else if (average > 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}


// ========== TASK 4: Check if passed ==========
// Return true if average >= 60 AND no grade below 50
function hasPassed(grades) {
  let average = getAverage(grades);

  for (let i = 0; i < grades.length; i++) {
    if (average >= 60 && grades[i] > 50) {
      return true;
    }
  }



// ========== TASK 5: Find highest grade ==========
// Use a while loop to find the highest grade
function getHighest(grades) {
  let highest = grades[0];

  let i = 0;
  while (grades[i] > highest) {
    highest = grades[i];
    i++;
  }
}


// ========== TASK 6: Create 3 students ==========
var students = [
  {
    name : "Peter",
    age : 18,
    grades : [60, 70]
  },
  {
    name : "Michelle",
    age : 20,
    grades : [90, 99]
  },
  {
    name : "Luffy",
    age : 22,
    grades : [50, 60]
  }
];


// ========== TASK 7: Display all results ==========
// Loop through students and console.log a summary for each
for (let i = 0; i < students.length; i++) {
  console.log(students.name);
  console.log(students.age);
  console.log(students.grades);
}

// ========= a random function =============
function mathOperation() {
    function findMin() {
        
    }
}