/* =====================================================
1. Order Total Calculator
Write a function that takes price and quantity and returns total bill.
Then rewrite using an arrow function.
===================================================== */

// Normal function
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Arrow function
const calculateTotalArrow = (price, quantity) => price * quantity;

// Variables
let price1 = 120;
let quantity1 = 4;

console.log("Q1: Order Total Calculator");
console.log("Normal Function Total:", calculateTotal(price1, quantity1));
console.log("Arrow Function Total:", calculateTotalArrow(price1, quantity1));
console.log("--------------------------------------------------");


/* =====================================================
2. Age Validator
Accepts age and returns:
"Eligible to vote" if age >= 18
"Not eligible" otherwise
===================================================== */

function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible";
  }
}

// Variables
let age1 = 17;

console.log("Q2: Age Validator");
console.log("Age:", age1, "=>", checkVotingEligibility(age1));
console.log("--------------------------------------------------");


/* =====================================================
3. Discount Finder
Function takes originalPrice and discountPercent
Return final price after discount
===================================================== */

function finalPriceAfterDiscount(originalPrice, discountPercent) {
  let discountAmount = (originalPrice * discountPercent) / 100;
  return originalPrice - discountAmount;
}

// Variables
let originalPrice = 1000;
let discountPercent = 20;

console.log("Q3: Discount Finder");
console.log(
  "Original Price:", originalPrice,
  "Discount %:", discountPercent,
  "Final Price:", finalPriceAfterDiscount(originalPrice, discountPercent)
);
console.log("--------------------------------------------------");


/* =====================================================
4. Username Formatter (Arrow Function)
Takes firstName and lastName and returns:
"Welcome, John Doe!"
===================================================== */

const formatUsername = (firstName, lastName) => `Welcome, ${firstName} ${lastName}!`;

// Variables
let firstName = "John";
let lastName = "Doe";

console.log("Q4: Username Formatter");
console.log(formatUsername(firstName, lastName));
console.log("--------------------------------------------------");


/* =====================================================
5. Temperature Converter
Convert Celsius to Fahrenheit
Formula: F = (C * 9/5) + 32
===================================================== */

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Variables
let celsiusTemp = 25;

console.log("Q5: Temperature Converter");
console.log(celsiusTemp + "°C =>", celsiusToFahrenheit(celsiusTemp) + "°F");
console.log("--------------------------------------------------");


/* =====================================================
Part B — Scope & Variable Shadowing
===================================================== */

/* =====================================================
6. Bank Balance Scope
Global balance = 5000
Inside function balance = 2000
Print both values
===================================================== */

let balance = 5000;

function bankBalanceScope() {
  let balance = 2000; // shadowing
  console.log("Inside Function Balance:", balance);
}

console.log("Q6: Bank Balance Scope");
console.log("Global Balance:", balance);
bankBalanceScope();
console.log("--------------------------------------------------");


/* =====================================================
7. Office Login System
role = "Admin" outside
Inside function change role to "User"
Print both values
Explain which one is used where
===================================================== */

let role = "Admin";

function loginSystem() {
  role = "User"; // modifies global variable
  console.log("Inside Function Role:", role);
}

console.log("Q7: Office Login System");
console.log("Before Function Role:", role);
loginSystem();
console.log("After Function Role:", role);
console.log("Explanation: Since role is not redeclared inside the function, it updates the GLOBAL role.");
console.log("--------------------------------------------------");


/* =====================================================
8. Counter Bug
count = 0
Inside function declare let count = 10
Increment both and check which changes
===================================================== */

let count = 0;

function counterBug() {
  let count = 10; // local shadowing
  count++;
  console.log("Inside Function Count:", count);
}

console.log("Q8: Counter Bug");
console.log("Before Function Global Count:", count);
counterBug();
count++;
console.log("After Increment Global Count:", count);
console.log("Explanation: Inside function count is local, global count remains unchanged unless modified outside.");
console.log("--------------------------------------------------");


/* =====================================================
Part C — Arrays: Creation & Access
===================================================== */

/* =====================================================
9. Shopping Cart
cart = ["Milk", "Bread", "Eggs"]
Print first and last item
Add "Butter"
===================================================== */

let cart = ["Milk", "Bread", "Eggs"];

console.log("Q9: Shopping Cart");
console.log("Cart:", cart);
console.log("First item:", cart[0]);
console.log("Last item:", cart[cart.length - 1]);

cart.push("Butter");
console.log("After adding Butter:", cart);
console.log("--------------------------------------------------");


/* =====================================================
10. Student List
Array of 5 students
Function prints 2nd and 4th student
===================================================== */

let students = ["Aman", "Ravi", "Neha", "Priya", "Karan"];

function print2ndAnd4thStudent(studentArray) {
  console.log("2nd Student:", studentArray[1]);
  console.log("4th Student:", studentArray[3]);
}

console.log("Q10: Student List");
console.log("Students:", students);
print2ndAnd4thStudent(students);
console.log("--------------------------------------------------");


/* =====================================================
Array Methods (Real-World Scenarios)
===================================================== */

/* =====================================================
11. Bus Queue System (shift)
Remove first person using shift()
===================================================== */

let busQueue = ["Ram", "Shyam", "Amit", "Neeraj"];

console.log("Q11: Bus Queue System (shift)");
console.log("Original Queue:", busQueue);
let removedPerson = busQueue.shift();
console.log("Removed Person:", removedPerson);
console.log("Updated Queue:", busQueue);
console.log("--------------------------------------------------");


/* =====================================================
12. Movie Ticket Line (unshift)
VIP arrives — add at beginning using unshift()
===================================================== */

let movieLine = ["Person1", "Person2", "Person3"];

console.log("Q12: Movie Ticket Line (unshift)");
console.log("Original Line:", movieLine);
movieLine.unshift("VIP");
console.log("Updated Line:", movieLine);
console.log("--------------------------------------------------");


/* =====================================================
13. Undo Feature (pop)
Remove last action using pop()
===================================================== */

let actions = ["Typed text", "Bold applied", "Image added"];

console.log("Q13: Undo Feature (pop)");
console.log("Original Actions:", actions);
let lastActionRemoved = actions.pop();
console.log("Removed Action:", lastActionRemoved);
console.log("Updated Actions:", actions);
console.log("--------------------------------------------------");


/* =====================================================
14. Notification System (push)
Create empty notifications array
Add 3 notifications using push()
===================================================== */

let notifications = [];

console.log("Q14: Notification System (push)");
notifications.push("New Message from Admin");
notifications.push("Your order is shipped");
notifications.push("Password changed successfully");
console.log("Notifications:", notifications);
console.log("--------------------------------------------------");


/* =====================================================
15. Chat Application Queue
messages = ["Hi", "How are you?", "Bye"]
Steps:
1) Add "Welcome" at end
2) Remove first message
3) Add "Admin joined" at start
4) Remove last message
Print final messages
===================================================== */

let messages = ["Hi", "How are you?", "Bye"];

console.log("Q15: Chat Application Queue");
console.log("Initial Messages:", messages);

// 1 Add at end
messages.push("Welcome");

// 2 Remove first
messages.shift();

// 3 Add at start
messages.unshift("Admin joined");

// 4 Remove last
messages.pop();

console.log("Final Messages:", messages);
console.log("--------------------------------------------------");
