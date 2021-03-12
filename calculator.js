const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result;

rl.question("Enter first number: ", function (firstNum) {
  rl.question("\nEnter operator e.g (+, -, *, /): ", function (operator) {
    rl.question("\nEnter second number: ", function (secondNum) {
      if (isNaN(firstNum) === true || isNaN(secondNum) === true) {
        console.log("\nInvalid input");
        console.log(`\nFirst and second number input must be numbers`);
        rl.close();
        return;
      }
      switch (operator) {
        case "+":
          result = parseFloat(firstNum) + parseFloat(secondNum);
          console.log(`\n${firstNum} + ${secondNum} = ${result}`);
          break;

        case "-":
          result = parseFloat(firstNum) - parseFloat(secondNum);
          console.log(`\n${firstNum} - ${secondNum} = ${result}`);
          break;

        case "*":
          result = parseFloat(firstNum) * parseFloat(secondNum);
          console.log(`\n${firstNum} * ${secondNum} = ${result}`);
          break;

        case "/":
          result = parseFloat(firstNum) / parseFloat(secondNum);
          console.log(`\n${firstNum} / ${secondNum} = ${result}`);
          break;

        default:
          console.log("\nInvalid operator");
          break;
      }
      rl.close();
    });
  });
});

rl.on("close", function () {
  console.log("\nWe move");
  process.exit(0);
});
