import inquirer from "inquirer";
import chalk from "chalk";
let tasks = [];
let isExit = true;
console.log(chalk.bold.blue("-----------------------------------------------"));
console.log(chalk.bold.red("|") +
    chalk.bold.yellow("                 Todo's List                 ") +
    chalk.bold.red("|"));
console.log(chalk.bold.red("|") +
    chalk.bold.green("             Developed by Ali Hassan         ") +
    chalk.bold.red("|"));
console.log(chalk.bold.blue("-----------------------------------------------"));
while (isExit) {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "todoList",
            message: "What you want to do?",
            choices: ["Add Todo", "View Todo", "Update Todo", "Delete Todo", "Exit"],
        },
    ]);
    switch (answers.todoList) {
        case "Add Todo":
            const task = await inquirer.prompt([
                {
                    type: "input",
                    name: "addtask",
                    message: "Enter the task to add : ",
                },
            ]);
            tasks.push(task.addtask);
            console.log(chalk.green("\nTask added successfully.\n"));
            break;
        case "View Todo":
            if (tasks.length === 0) {
                console.log("No tasks added yet.");
            }
            else {
                console.log("Your todo tasks:");
                tasks.forEach((task, index) => {
                    console.log(`${index + 1} :  ${task}`);
                });
            }
            break;
        case "Update Todo":
            const task2 = await inquirer.prompt([
                {
                    type: "number",
                    name: "updatetask",
                    message: "Enter the task number to mark as completed : ",
                },
            ]);
            tasks.forEach((task, index) => {
                if (task2.updatetask == index + 1) {
                    tasks[index] = `${task} (completed)`;
                }
            });
            console.log(chalk.yellow("\nTask updates successfully.\n"));
            break;
        case "Delete Todo":
            const task3 = await inquirer.prompt([
                {
                    type: "number",
                    name: "deltask",
                    message: "Enter the task number to delete : ",
                },
            ]);
            tasks.forEach((task, index) => {
                if (task3.deltask == index + 1) {
                    tasks.splice(index, 1);
                }
            });
            console.log(chalk.red("\nTask deleted successfully.\n"));
            break;
        case "Exit":
            isExit = false;
            break;
    }
}
