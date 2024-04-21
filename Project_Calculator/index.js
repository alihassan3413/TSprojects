import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "operands",
        message: "Enter your numbers with operators : ",
    },
]);
function sum(num1) {
    let array = num1.split("+");
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += Number(array[index]);
    }
    console.log(sum);
}
sum(answer.operands);
