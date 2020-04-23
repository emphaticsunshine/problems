/**
 * @param {number} Integer
 * @return {number}
 */
var reverseInteger = function(number) {
    if(!Number.isInteger(number)) {
        throw Error("Input should be a number");
    }

    const isNegative = number < 0;
    number = Math.abs(number);

    let newNumber = 0;
    while(number > 0) {
        const remainder = number % 10;
        number = Math.floor(number/10);
        newNumber = newNumber * 10 + remainder;
    }

    return isNegative ? -newNumber : newNumber;
};

module.exports = {
    "name": "Reverse Integer",
    program: reverseInteger
};