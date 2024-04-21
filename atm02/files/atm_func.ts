import inquirer from "inquirer";
import chalk from "chalk";

export async function atm(balance: number) {
  let istrue = true;
  while (istrue) {
    const atm = await inquirer.prompt([
      {
        type: "list",
        name: "options",
        message: "Your account : ",
        choices: [
          "Check Balance",
          "Amount Deposit",
          "Amount Withdraw",
          "Log Out",
        ],
      },
    ]);

    switch (atm.options) {
      case "Check Balance":
        console.log(chalk.yellow.bold(balance));
        break;

      case "Amount Deposit":
        const amount = await inquirer.prompt([
          {
            type: "number",
            name: "deposit",
            message: "Enter the amount to deposit : ",
          },
        ]);
        if (amount.deposit > 0) {
          balance += amount.deposit;
          console.log(
            chalk.green.bold(
              `Amount deposited Successfully.\nNew Balance ${balance}`
            )
          );
        } else {
          console.log(
            chalk.red.bold(
              "Deposit amount cannot be less than zero or in alphabets!!"
            )
          );
        }

        break;

      case "Amount Withdraw":
        const amountW = await inquirer.prompt([
          {
            type: "number",
            name: "withdraw",
            message: "Enter the amount to deposit : ",
          },
        ]);
        if (amountW.withdraw <= balance) {
          balance -= amountW.withdraw;
          console.log(
            chalk.green.bold(
              `Amount withdrawn ${amountW.withdraw}.\nNew Balance ${balance}`
            )
          );
        } else {
          console.log(chalk.red.bold("Your balance is insufficient!!"));
        }
        break;

      case "Log Out":
        istrue = false;
        console.log(chalk.yellow.bold("Logged Out Successfully!!!"));
      default:
        istrue = false;
        break;
    }
  }
}
