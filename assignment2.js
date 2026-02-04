// Print all even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("**************************************")


// Check if a number is positive, negative, or zero.

function checkNumber(num) {
    if (num > 0) {
        console.log(num+" Positive number");
    } else if (num < 0) {
        console.log(num+" Negative number");
    } else {
        console.log(num+" Zero");
    }
}

checkNumber(-5);
console.log("**************************************")


// Use a ternary operator to check if a number is even or odd.
let number = 7;

let result = (number % 2 === 0) ? number+" is Even" : number+" is Odd";
console.log(result);


console.log("**************************************")

// Loop through an array and stop when value is 50.
let arr = [10, 20, 30, 50, 60, 70];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 50) {
        break;
    }
    console.log(arr[i]);
}


console.log("**************************************")

// Skip all multiples of 3 using continue.
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
