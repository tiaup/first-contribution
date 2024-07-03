// Function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Get input from the user
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the first number: ", (input1) => {
  const num1 = parseFloat(input1);

  readline.question("Enter the second number: ", (input2) => {
    const num2 = parseFloat(input2);

    const result = addNumbers(num1, num2);
    console.log(`The sum of ${num1} and ${num2} is ${result}`);

    readline.close();
  });
});
