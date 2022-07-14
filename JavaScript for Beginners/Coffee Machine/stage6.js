// Global vars - Machine Coffee
let waterMachine = 400;
let milkMachine = 540;
let beansMachine = 120;
let cupsMachine = 9;
let moneyMachine = 550;

function remainingOption(){
    console.log(`The coffee machine has:
                 ${waterMachine} ml of water
                 ${milkMachine} ml of milk
                 ${beansMachine} g of coffee beans
                 ${cupsMachine} disposable cups
                 $${moneyMachine} of money`);
}

function buyOption(){
    let option = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
    switch (option){
        case "1":
            if (waterMachine >= 250 && beansMachine >= 16 && cupsMachine >= 1) {
                waterMachine -= 250;
                beansMachine -= 16;
                moneyMachine += 4;
                cupsMachine -= 1;
                console.log("I have enough resources, making you a coffee!");
            } else {
                if (waterMachine < 250)
                    console.log("Sorry, not enough water!");
                if (beansMachine < 16)
                    console.log("Sorry, not enough coffee beans!");
                if (cupsMachine < 1)
                    console.log("Sorry, not enough disposable cups!");
            }
            break;
        case "2":
            if (waterMachine >= 350 && milkMachine >= 75 && beansMachine >= 20 && cupsMachine >= 1) {
                waterMachine -= 350;
                milkMachine -= 75;
                beansMachine -= 20;
                moneyMachine += 7;
                cupsMachine -= 1;
                console.log("I have enough resources, making you a coffee!");
            } else {
                if (waterMachine < 350)
                    console.log("Sorry, not enough water!");
                if (milkMachine < 75)
                    console.log("Sorry, not enough milk!");
                if (beansMachine < 16)
                    console.log("Sorry, not enough coffee beans!");
                if (cupsMachine < 1)
                    console.log("Sorry, not enough disposable cups!");
            }
            break;
        case "3":
            if (waterMachine >= 200 && milkMachine >= 100 && beansMachine >= 12 && cupsMachine >= 1) {
                waterMachine -= 200;
                milkMachine -= 100;
                beansMachine -= 12;
                moneyMachine += 6;
                cupsMachine -= 1;
                console.log("I have enough resources, making you a coffee!");
            } else {
                if (waterMachine < 200)
                    console.log("Sorry, not enough water!");
                if (milkMachine < 100)
                    console.log("Sorry, not enough milk!");
                if (beansMachine < 12)
                    console.log("Sorry, not enough coffee beans!");
                if (cupsMachine < 1)
                    console.log("Sorry, not enough disposable cups!");
            }
            break;
    }
}

function takeOption(){
    console.log(`I gave you $${moneyMachine}`)
    moneyMachine = 0;
}

function fillOption(){
    let option = +input("Write how many ml of water you want to add:\n");
    waterMachine += option;
    option = +input("Write how many ml of milk you want to add:\n");
    milkMachine += option;
    option = +input("Write how many grams of coffee beans you want to add:\n");
    beansMachine += option;
    option = +input("Write how many disposable coffee cups you want to add:\n");
    cupsMachine += option;
}


let title = `
                            ad88     ad88                          
                           d8"      d8"                            
                           88       88                             
 ,adPPYba,   ,adPPYba,   MM88MMM  MM88MMM   ,adPPYba,   ,adPPYba,  
a8"     ""  a8"     "8a    88       88     a8P_____88  a8P_____88  
8b          8b       d8    88       88     8PP"""""""  8PP"""""""  
"8a,   ,aa  "8a,   ,a8"    88       88     "8b,   ,aa  "8b,   ,aa  
 \`"Ybbd8"'   \`"YbbdP"'     88       88      \`"Ybbd8"'   \`"Ybbd8"'
 `

console.log(title);

let input = require('sync-input');
let notExit = true;
do {
    let action = input("Write action (buy, fill, take, remaining, exit):\n");
    switch (action){
        case "buy":
            buyOption();
            break;
        case "fill":
            fillOption();
            break;
        case "take":
            takeOption();
            break;
        case "remaining":
            remainingOption();
            break;
        case "exit":
            notExit = false;
            break;
    }
} while (notExit);