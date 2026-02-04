// Que 1.Write a Javascript function to print even and odd numbers from 1 to 10;


function printEvenOdd() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i + " is Even");
        } else {
            console.log(i + " is Odd");
        }
    }
}
printEvenOdd();

// Que 2.Write a Javascript function to display you name with welcome message

function welcomeMessage(name) {
    console.log("Welcome, " + name + "!");
}

welcomeMessage("Madhusudan");
