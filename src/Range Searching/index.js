var findNum = function(numbers, target) {
    let output = [-1, -1];
    let start = 0;
    let end = numbers.length - 1;

    while(start < end) {
        const mid = Math.floor((start + end) / 2);
        if(numbers[mid] < target) {
            start = mid + 1;
        } else if(numbers[mid] > target) {
            end = mid - 1;
        } else {
            let startIndex = mid;
            let endIndex = mid;
            while(startIndex > 0 && numbers[startIndex - 1] === target) {
                startIndex--;
            }
            while(endIndex < numbers.length - 1 && numbers[endIndex + 1] === target) {
                endIndex++;
            }
            return [startIndex, endIndex];
        }
    }
    return output;
};

module.exports = {
    "name": "Range Searching",
    program: findNum
};