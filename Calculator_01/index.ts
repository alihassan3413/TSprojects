import inquirer from "inquirer";

while (true) {
  const ans = await inquirer.prompt([
    {
      type: "number",
      name: "numberofOperands",
      message: "How many numbers on which you want to perform calculations : ",
    },
  ]);

  if (ans.numberofOperands == 2) {
    const answer = await inquirer.prompt([
      {
        type: "number",
        name: "num1",
        message: "Enter your first number : ",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter your second number : ",
      },
      {
        type: "list",
        name: "operators",
        message: "Select your operator : ",
        choices: ["+", "-", "*", "/", "**"],
      },
    ]);

    switch (answer.operators) {
      case "+":
        console.log(answer.num1 + answer.num2);
        break;

      case "-":
        console.log(answer.num1 - answer.num2);
        break;

      case "*":
        console.log(answer.num1 * answer.num2);
        break;

      case "/":
        console.log(answer.num1 / answer.num2);
        break;

      case "**":
        console.log(answer.num1 ** answer.num2);

      default:
        break;
    }
  } else {
    const operatorAnswer = await inquirer.prompt([
      {
        type: "list",
        name: "operators",
        message: "Select your operation you want to perform on your inputs : ",
        choices: ["+", "-", "*", "/"],
      },
    ]);

    let result = 0;
    for (let index = 0; index < ans.numberofOperands; index++) {
      const answer = await inquirer.prompt([
        {
          type: "number",
          name: `num${index + 1}`,
          message: `Enter your ${index + 1} number : `,
        },
      ]);

      if (index === 0) {
        result = answer[`num${index + 1}`];
      } else {
        switch (operatorAnswer.operators) {
          case "+":
            result += answer[`num${index + 1}`];
            break;
          case "-":
            result -= answer[`num${index + 1}`];
            break;
          case "*":
            result *= answer[`num${index + 1}`];
            break;
          case "/":
            result /= answer[`num${index + 1}`];
            break;
          default:
            console.log("Invalid operator");
        }
      }
    }
    console.log("Result:", result);
  }
  const startAgain = await inquirer.prompt([
    {
      type: "input",
      name: "repeat",
      message: "Do you want to continue? press y otherwise n: ",
    },
  ]);
  if (
    startAgain.repeat == "y" ||
    startAgain.repeat == "Y" ||
    startAgain.repeat == "yes" ||
    startAgain.repeat == "YES"
  ) {
    continue;
  } else {
    break;
  }
}
