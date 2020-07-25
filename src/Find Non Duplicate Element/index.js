const findNonDuplicate = (nums) => {
    let output = 0;
    for(let num of nums) {
        output ^= num;
    }
    return output;
};

module.exports = findNonDuplicate;