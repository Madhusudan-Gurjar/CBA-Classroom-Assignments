

/* =====================================================
1. Creating & Accessing Arrays
Create array colors with 5 colors.
Print first, middle, last element.

Given:
let marks = [78, 85, 90, 66, 88];
Print the second highest mark.
===================================================== */

console.log("========== Q1: Creating & Accessing Arrays ==========");

// Colors array
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

console.log("Colors:", colors);
console.log("First color:", colors[0]);

let middleIndex = Math.floor(colors.length / 2);
console.log("Middle color:", colors[middleIndex]);

console.log("Last color:", colors[colors.length - 1]);

// Marks array
let marks = [78, 85, 90, 66, 88];
console.log("Marks:", marks);
let sortedMarks=marks.sort();

console.log("Sorted Marks:",sortedMarks);
console.log("2nd highest marks ",sortedMarks[sortedMarks.length-2]);


console.log("--------------------------------------------------");


/* =====================================================
2. Using push(), pop(), shift(), unshift()
Create empty array tasks.
Add 3 tasks using push()
Remove last task using pop() and display it.

Given:
let queue = ["A", "B", "C"];
Add "Z" at beginning
Remove first element and print updated array.
===================================================== */

console.log("========== Q2: push(), pop(), shift(), unshift() ==========");

// tasks array
let tasks = [];
tasks.push("Complete Assignment");
tasks.push("Study JavaScript");
tasks.push("Go to Gym");

console.log("Tasks after push:", tasks);

let removedTask = tasks.pop();
console.log("Removed last task (pop):", removedTask);
console.log("Tasks after pop:", tasks);

// queue array
let queue = ["A", "B", "C"];
console.log("Original Queue:", queue);

queue.unshift("Z"); // add at beginning
console.log("After adding Z at beginning:", queue);

queue.shift(); // remove first element
console.log("After removing first element:", queue);

console.log("--------------------------------------------------");


/* =====================================================
3. Using splice() & slice()
Given:
let fruits = ["Apple","Banana","Mango","Orange","Grapes"];

1) Remove "Mango" using splice()
2) Create new array with only "Banana" & "Mango" using slice()
3) Insert "Pineapple" and "Kiwi" at index 2 using splice()
===================================================== */

console.log("========== Q3: splice() & slice() ==========");

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Original Fruits:", fruits);

// ✅ slice (Banana & Mango)
let bananaMango = fruits.slice(1, 3);
console.log("New Array using slice (Banana & Mango):", bananaMango);

// ✅ remove Mango using splice
let mangoIndex = fruits.indexOf("Mango");
if (mangoIndex !== -1) {
  fruits.splice(mangoIndex, 1);
}
console.log('After removing "Mango" using splice:', fruits);

// ✅ insert Pineapple & Kiwi at index 2
fruits.splice(2, 0, "Pineapple", "Kiwi");
console.log('After inserting "Pineapple" and "Kiwi" at index 2:', fruits);

console.log("--------------------------------------------------");


/* =====================================================
4. Iterating Arrays
1) Use for loop to print numbers
let numbers = [10,20,30,40];

2) Use forEach to print:
"Hello <name>"

3) Use map() to create squared array:
let nums = [2,4,6,8]
===================================================== */

console.log("========== Q4: Iterating Arrays ==========");

// 1) for loop
let numbers = [10, 20, 30, 40];
console.log("Numbers (for loop):");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2) forEach
let students = ["Amit", "Neha", "Ravi", "Priya"];
console.log("Student Greetings (forEach):");

students.forEach((name) => {
  console.log(`Hello ${name}`);
});

// 3) map() square
let nums = [2, 4, 6, 8];
let squaredNums = nums.map((n) => n * n);

console.log("Original nums:", nums);
console.log("Squared nums (map):", squaredNums);

console.log("--------------------------------------------------");


/* =====================================================
OBJECTS
===================================================== */

/* =====================================================
5. Object Creation & Property Access
Create object student with:
id, name, course, marks
Print student name & course
===================================================== */

console.log("========== Q5: Object Creation & Property Access ==========");

let student = {
  id: 101,
  name: "Madhusudan",
  course: "B.Tech",
  marks: 88
};

console.log("Student Name:", student.name);
console.log("Student Course:", student.course);

console.log("--------------------------------------------------");


/* =====================================================
6. Dot vs Bracket Notation
Given:
let user = {
  name: "Ravi",
  age: 25,
  "home city": "Delhi"
};
Access all properties correctly.
===================================================== */

console.log("========== Q6: Dot vs Bracket Notation ==========");

let user = {
  name: "Ravi",
  age: 25,
  "home city": "Delhi"
};

// Dot notation
console.log("Name:", user.name);
console.log("Age:", user.age);

// Bracket notation (needed for space key)
console.log("Home City:", user["home city"]);

console.log("--------------------------------------------------");


/* =====================================================
7. Nested Objects
Create:
company = {
  name: "TechSoft",
  address: { city: "Bangalore", pincode: 560001 }
}
Print city name
===================================================== */

console.log("========== Q7: Nested Objects ==========");

let company = {
  name: "TechSoft",
  address: {
    city: "Bangalore",
    pincode: 560001
  }
};

console.log("Company City:", company.address.city);

console.log("--------------------------------------------------");


/* =====================================================
8. Object.keys() & Object.values()
Given:
let laptop = { brand: "HP", price: 55000, ram: "16GB" };
Print all keys
Print all values
===================================================== */

console.log("========== Q8: Object.keys() & Object.values() ==========");

let laptop = {
  brand: "HP",
  price: 55000,
  ram: "16GB"
};

console.log("Laptop Keys:", Object.keys(laptop));
console.log("Laptop Values:", Object.values(laptop));

console.log("--------------------------------------------------");


/* =====================================================
9. Real-World Mini Task
Employees array of objects:
1) Print all employee names using map()
2) Print employees earning > 50000
3) Display all keys of first employee object
===================================================== */

console.log("========== Q9: Real-World Mini Task (Employees) ==========");

let employees = [
  { id: 1, name: "Amit", salary: 40000 },
  { id: 2, name: "Neha", salary: 55000 },
  { id: 3, name: "Ravi", salary: 60000 }
];

// 1) Print names using map()
let employeeNames = employees.map((emp) => emp.name);
console.log("Employee Names (map):", employeeNames);

// 2) Employees earning more than 50000
let highSalaryEmployees = employees.filter((emp) => emp.salary > 50000);
console.log("Employees earning > 50000:", highSalaryEmployees);

// 3) Keys of first employee
console.log("Keys of first employee:", Object.keys(employees[0]));

console.log("--------------------------------------------------");
