const { expect } = require('chai');
const program = require('./index');

describe('Find Non Duplicate Number', () => {
    const inputs = [
        [7, 3, 5, 5, 4, 3, 4, 8, 8],
        [],
        [3,5,6,100,3,6,5]
    ];

    const expected = [
        7,
        0,
        100
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            expect(program(input)).to.equal(expected[idx]);
        })
    });
});