const {numbers, name, hometown} = require("./data"); // (1)
// above is destructuring - simultaniously get variables from data.js for use in index.js
const sum = require("./sum"); // (2)
const cowsay = require('cowsay'); //(3)
const _ = require('lodash'); //(4)


// (1)*************************************

console.log(numbers);
console.log(`${name} is from ${hometown}`);

// (2) *************************************

console.log(sum(numbers));

// (3) ****************************************

console.log(cowsay.say({text : "hello"}));

// (4) ****************************************

console.log(_.shuffle(numbers));
