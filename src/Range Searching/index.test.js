const chai = require('chai');
const { program, name } = require('./index');

describe(name, () => {
    const inputs = [
        [[1, 1, 3, 5, 7], 1],
        [[1, 2, 3, 4], 5],
        [[], 5],
        [[-1, 2, 4, 4, 4, 5, 6], 4]
    ];

    const expected = [
        [0, 1],
        [-1, -1],
        [-1, -1],
        [2, 4]
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            chai.expect(program.apply(null,input)).to.eql(expected[idx]);
        })
    });
});