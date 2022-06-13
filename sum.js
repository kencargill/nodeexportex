// function calcSum(numbers) {
//     let sum = 0;
//     numbers.forEach(number => (sum += numbers));
//     return sum;
// }

// //default export
// module.exports = calcSum;

//above is jalens

module.exports = function numSum (numbers) {
    // console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    };
    return total
};
