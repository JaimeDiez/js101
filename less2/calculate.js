// ask the user for the first number
// ask the user for the second number
// ask the user for an operationg to perform
// perform the operatin on the two numbers given
// print the result to terminal
const readline = require('readline-sync');
console.log('Welcome to calculator!');
console.log("What's the first number?");
let firstNumber = readline.question();
console.log("What's the second number?");
let secondNumber = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(firstNumber) + Number(secondNumber);
} else if (operation === '2') {
  output = Number(firstNumber) - Number(secondNumber);
} else if (operation === '3') {
  output = Number(firstNumber) * Number(secondNumber);
} else if (operation === '4') {
  output = Number(firstNumber) / Number(secondNumber);
}

console.log(`the result is: ${output}`);
