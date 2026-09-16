const crypto = require("crypto");

for (let i = 1; i <= 10; i++) {

    const dice = crypto.randomInt(1, 7);

    console.log(`Roll ${i}: ${dice}`);
}