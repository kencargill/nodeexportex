const data = require('./data.js').data;

console.log(data.numbers);
console.log(`${data.name} is from ${data.hometown}`);

// *************************************

const sum = require('./sum.js');

console.log(sum.sum(data.numbers));

// ****************************************

const cowsay = require('cowsay');

console.log(greeting);

// ****************************************

const lodash = require('lodash');

console.log(_.shuffle(numbers));