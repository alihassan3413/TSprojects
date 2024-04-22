import inquirer from "inquirer";

async function guessNumber() {
  let rand = Math.floor(Math.random() * 10 + 1);
  console.log(
    "The number is between 1 and 10.\nYou have three trys to guess the number!"
  );
  for (let i = 0; i < 3; i++) {
    const answer = await inquirer.prompt([
      {
        type: "number",
        name: "num",
        message: "Enter your number : ",
      },
    ]);
    if (answer.num > rand) {
      console.log("Your number is higher guess the lower than this!!!");
    } else if (answer.num < rand) {
      console.log("Your number is lower guess the higher than this!!!");
    } else if (answer.num == rand) {
      console.log("Congratulations!!! You won the game.");
      break;
    }
  }
}

guessNumber();
