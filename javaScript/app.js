const readline = require('readline');

function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function validateNumbers() {
  return getUserInput("How many numbers would you like to add? ")
    .then((arrayNum) => {
      if (arrayNum < 2 || isNaN(arrayNum)) {
        console.log("Invalid input. Please enter a number that is more than 1: ");
        return validateNumbers(); // Prompt user again for valid input
      } else {
          console.log(arrayNum); // Valid input, do something with it
          return arrayNum; // Return the valid value
      }
    });
}

function addNumbers(arrayNum) {
  let total = 0;

  const processInput = (count) => {
    if (isNaN(count)) {
      console.log("Invalid input. Please enter a valid number.");
      getUserInput("Please enter the number you want to add: ")
        .then(processInput); // Repeat the prompt for a valid input
    } else {
      total += Number(count);
      if (arrayNum > 1) {
        arrayNum--; // Decrement the remaining count
        getUserInput("Please enter the number you want to add: ")
          .then(processInput); // Process the next input
      } else {
        console.log("Total:", total);
        // Continue with the rest of your code using the total
      }
    }
  };

  getUserInput("Please enter the number you want to add: ")
    .then(processInput);
}

validateNumbers()
  .then((validValue) => {
    console.log("Valid value:", validValue);
    addNumbers(validValue);
    // Continue with the rest of your code using the valid value
  });
