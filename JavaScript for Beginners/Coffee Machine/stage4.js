let waterMachine = 400;
let milkMachine = 540;
let beansMachine = 120;
let cupsMachine = 9;
let moneyMachine = 550;

function showMachine(){
    console.log("The coffee machine has:");
    console.log(`${waterMachine} ml of water`);
    console.log(`${milkMachine} ml of milk`);
    console.log(`${beansMachine} g of coffee beans`);
    console.log(`${cupsMachine} disposable cups`);
    console.log(`$${moneyMachine} of money`);
}
showMachine();
let input = require('sync-input');
let option = input("Write action (buy, fill, take):\n");
switch (option){
    case "buy":
        option = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
        switch (option){
            case "1":
                waterMachine -= 250;
                beansMachine -= 16;
                moneyMachine += 4;
                break;
            case "2":
                waterMachine -= 350;
                milkMachine -= 75;
                beansMachine -= 20;
                moneyMachine += 7;
                break;
            case "3":
                waterMachine -= 200;
                milkMachine -= 100;
                beansMachine -= 12;
                moneyMachine += 6;
                break;
        }
        cupsMachine -= 1;
        break;
    case "fill":
        option = +input("Write how many ml of water you want to add:\n");
        waterMachine += option;
        option = +input("Write how many ml of milk you want to add:\n");
        milkMachine += option;
        option = +input("Write how many grams of coffee beans you want to add:\n");
        beansMachine += option;
        option = +input("Write how many disposable coffee cups you want to add:\n");
        cupsMachine += option;
        break;
    case "take":
        console.log(`I gave you $${moneyMachine}`)
        moneyMachine = 0;
        break;
}
showMachine();