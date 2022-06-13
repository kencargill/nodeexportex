
module.exports = function numSum (numbers) {
    // console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    };
    return total
};

// module.exports =  numSum;

// console.log(numSum([ 1, 1, 2, 3, 5, 8 ]));