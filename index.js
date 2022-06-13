const data = require("./data"); // (1)
const sum = require("./sum"); // (2)
const cowsay = require('cowsay'); //(3)
const lodash = require('lodash'); //(4)


// (1)*************************************

console.log(data.numbers);
console.log(`${data.name} is from ${data.hometown}`);

// (2) *************************************

console.log(sum(data.numbers));

// (3) ****************************************

console.log(cowsay.say({text : "hello"}));

// (4) ****************************************

console.log(lodash.shuffle(numbers));
