#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        { message: "Enter first number", type: "number", name: "firstNumber" },
        { message: "Enter second number", type: "number", name: "secondNumber" },
        {
            message: "select one of the opereator to perform operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    if (answer.operator === "Addition") {
        console.log(chalk.cyan(answer.firstNumber + answer.secondNumber));
    }
    else if (answer.operator === "Subtraction") {
        console.log(chalk.cyan(answer.firstNumber - answer.secondNumber));
    }
    else if (answer.operator === "Multiplication") {
        console.log(chalk.cyan(answer.firstNumber * answer.secondNumber));
    }
    else if (answer.operator === "Division") {
        console.log(chalk.cyan(answer.firstNumber / answer.secondNumber));
    }
    else {
        console.log(chalk.cyan("Please select a valid operator"));
    }
    const answer2 = await inquirer.prompt({
        type: "input",
        name: "continue",
        message: "Enter to continue or type q to exit.",
    });
    if (answer2.continue === "q") {
        condition = false;
    }
}
