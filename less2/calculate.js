// ask the user for the first number
// ask the user for the second number
// ask the user for an operationg to perform
// perform the operatin on the two numbers given
// print the result to terminal
const readline = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`); 
}


prompt('Welcome to calculator!');
prompt("What's the first number?");
let firstNumber = readline.question();
prompt("What's the second number?");
let secondNumber = readline.question();

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
switch (operation) {
  case '1':
  output = Number(firstNumber) + Number(secondNumber);
  break;
  case '2':
  output = Number(firstNumber) - Number(secondNumber);
  break;
  case '3':
  output = Number(firstNumber) * Number(secondNumber);
  break;
  case '4':
  output = Number(firstNumber) / Number(secondNumber);
  break;
}

prompt(`the result is: ${output}`);
