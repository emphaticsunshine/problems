/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
    const diff = [];
    for(let i = 0; i < gas.length; i++) {
        diff[i] = gas[i] - cost[i];
    };

    for(let i = 0; i < diff.length; i++) {
        if(diff[i] >= 0) {
            if(isItValidCircuit(i, diff)) {
                return i;
            }
        }
    }

    return -1;
};

function isItValidCircuit(idx, diff) {
    let sum = diff[idx];
    let i = (idx + 1) % diff.length;
    while(i !== idx) {
        sum += diff[i];
        if(sum < 0) {
            // console.log(sum, i, idx);
            return false;
        }

        if(i === diff.length - 1) {
            i = 0;
        } else {
            i++;
        }
    }

    return true;
}

module.exports = {
    "name": "Gas Station",
    program: canCompleteCircuit
};
