const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Application started");

const numbers = [10, 7, 20, 13];

numbers.forEach(number => {
    console.log(`${number} is even: ${isEven(number)}`);
});

logger("Application finished");