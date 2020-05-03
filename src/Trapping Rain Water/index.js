/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxHeights = [0];
    let waterArea = 0;
    let max = 0;

    for(let i = 1; i < height.length - 1; i++) {
        max = Math.max(height[i - 1], max);
        maxHeights.push(max);
    }
    max = 0;
    maxHeights[height.length - 1] = 0;

    for(let i = height.length - 2; i > 0; i--) {
        max = Math.max(height[i + 1], max);
        maxHeights[i] = Math.min(max, maxHeights[i]);
    };

    for(let i = 0; i < height.length; i++) {
        const currentHeight = height[i];
        const maxHeight = maxHeights[i];
        if(currentHeight < maxHeight) {
            waterArea += maxHeight - currentHeight;
        }
    }

    return waterArea;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var trap2Pointers = function(height) {
    let leftMax = 0;
    let rightMax = 0;
    let waterArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    
    while(left < right) {
        if(height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            waterArea += (leftMax - height[left]);
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            waterArea += (rightMax - height[right]);
            right--;
        }
    }

    return waterArea;
};

module.exports = {
    "name": "Trapping Rain Water",
    program: trap,
    program2: trap2Pointers
};