let total = 0;

let sum = (array) => {
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    };
    return total
};

module.exports = sum;