#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 1234;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your 4 digit PIN?",
    },
]);
if (answer.pin === myPin) {
    console.log("Pin is correct");
    let action_ans = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["withdraw", "Fast Cash", "Check Balance"],
            message: "Select option below",
        },
    ]);
    if (action_ans.action === "withdraw") {
        let amount_ans = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount you need to withdraw?",
            },
        ]);
        if (amount_ans.amount <= 0 || amount_ans.amount > myBalance) {
            console.log("Please enter correct amouunt");
        }
        else {
            myBalance -= amount_ans.amount;
            console.log(`You withdraw  ${amount_ans.amount} amount`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (action_ans.action === "Fast Cash") {
        let fastCash_ans = await inquirer.prompt([
            {
                name: "cash",
                message: "Please choose your amount from the following options",
                type: "list",
                choices: ["500", "1000", "2000", "4000", "5000"],
            },
        ]);
        if (fastCash_ans.cash === "500") {
            myBalance -= fastCash_ans.cash;
            console.log(`You withdraw  ${fastCash_ans.cash} amount`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else if (fastCash_ans.cash === "1000") {
            myBalance -= fastCash_ans.cash;
            console.log(`You withdraw  ${fastCash_ans.cash} amount`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else if (fastCash_ans.cash === "2000") {
            myBalance -= fastCash_ans.cash;
            console.log(`You withdraw  ${fastCash_ans.cash} amount`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else if (fastCash_ans.cash === "4000") {
            myBalance -= fastCash_ans.cash;
            console.log(`You withdraw  ${fastCash_ans.cash} amount`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else if (fastCash_ans.cash === "5000") {
            myBalance -= fastCash_ans.cash;
            console.log(`You withdraw  ${fastCash_ans.cash} amount`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (action_ans.action === "Check Balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
}
else {
    console.log("Please enter correct PIN");
}
