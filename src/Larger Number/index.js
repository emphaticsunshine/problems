const larger_number = (nums) => {
    let stack = [];
    let result = new Array(nums.length).fill(-1);
    for(let i = 0; i < nums.length; i++) {
        while(stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            result[stack.pop()] = i;
        }
        stack.push(i);
    }
    return result;
};

module.exports = larger_number;