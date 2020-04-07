/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const numbers = new Map();
    let counter = 0;
    arr.forEach((value) => {
        numbers.set(value);
    });

    arr.forEach((value) => {
        const nextNumber = value + 1;
        if(numbers.has(nextNumber)) {
            counter++;
        }
    });

    return counter;
};

module.exports = {
    "name": "Counting Elements",
    program: countElements
};