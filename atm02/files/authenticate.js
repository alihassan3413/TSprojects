import inquirer from "inquirer";
import chalk from "chalk";
import User from "./User.js";
import { atm } from "./atm_func.js";
export const users = [];
export async function signup() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Enter the UserId : ",
        },
        {
            type: "input",
            name: "userPin",
            message: "Enter the four digit pin : ",
        },
    ]);
    const existing = users.find((u) => u.id == data.userId);
    if (existing) {
        console.log(chalk.red.bold("User ID already exists. Please choose a different ID."));
        return;
    }
    const newUser = new User(data.userId, data.userPin, 0);
    users.push(newUser);
}
export async function login() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Enter the UserId : ",
        },
        {
            type: "input",
            name: "userPin",
            message: "Enter the four digit pin : ",
        },
    ]);
    const user = users.find((u) => u.id == data.userId && u.pin == data.userPin);
    if (user) {
        console.log(chalk.green.bold("Successfully Login!"));
        const balancein = await inquirer.prompt([
            {
                type: "number",
                name: "balance",
                message: "Enter the amount of balance : ",
            },
        ]);
        user.balance += balancein.balance;
        await atm(user.balance);
        return user;
    }
    else {
        console.log(chalk.red.bold("User Id or Pin does not match!"));
        return null;
    }
}
async function main() {
    let isTrue = true;
    while (isTrue) {
        const ans = await inquirer.prompt([
            {
                type: "number",
                name: "choice",
                message: "Enter 1 or 2 : ",
            },
        ]);
        switch (ans.choice) {
            case 1:
                await signup();
                break;
            case 2:
                await login();
                break;
            default:
                isTrue = false;
                console.log(chalk.yellow.bold("Exiting..."));
                break;
        }
    }
}
main();
