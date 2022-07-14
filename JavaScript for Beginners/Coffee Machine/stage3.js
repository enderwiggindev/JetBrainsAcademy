let input = require('sync-input');
let waterMachine = +input("Write how many ml of water the coffee machine has:\n");
let milkMachine = +input("Write how many ml of milk the coffee machine has:\n");
let gramsCoffeeMachine = +input("Write how many grams of coffee beans the coffee machine has:\n");
let cups = +input("Write how many cups of coffee you will need:\n");

let cupsAvailable = Math.min(
                            Math.floor(waterMachine / 200),
                            Math.floor(milkMachine / 50),
                            Math.floor(gramsCoffeeMachine / 15)
                    );

extraCups = cupsAvailable - cups;
if (cupsAvailable == cups)
    console.log("Yes, I can make that amount of coffee");
else if (cupsAvailable > cups)
    console.log(`Yes, I can make that amount of coffee (and even ${extraCups} more than that)`)
else
    console.log(`No, I can make only ${cupsAvailable} cups of coffee`)
