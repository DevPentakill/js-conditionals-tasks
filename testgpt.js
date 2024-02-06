// Function that takes user input and displays a message
function greetUser() {
    // Use prompt() to get user input
    let userName = prompt("Please enter your name:");

    // Check if the user entered a name
    if (userName) {
        // Display a personalized greeting
        alert("Hello, " + userName + "! Welcome!");
    } else {
        // Display a generic greeting if no name is entered
        alert("Hello! Welcome!");
    }
}

// Call the function to greet the user
greetUser();

//FOr terminal node style, GPT hinted at this
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function greetUser() {
  rl.question('Please enter your name: ', (userName) => {
    if (userName) {
      console.log(`Hello, ${userName}! Welcome!`);
    } else {
      console.log('Hello! Welcome!');
    }

    rl.close();
  });
}

// Call the function to greet the user
greetUser();

