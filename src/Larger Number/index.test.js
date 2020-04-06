const { expect } = require('chai');
const program = require('./index');

describe('Larger Number', () => {
    const inputs = [
        [3, 2, 5, 6, 9, 8],
        [],
        [1],
        [1, 2, 3, 4],
        [4, 3, 2, 1]
    ];

    const expected = [
        [2, 2, 3, 4, -1, -1],
        [],
        [-1],
        [1, 2, 3, -1],
        [-1, -1, -1, -1]
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            expect(program(input)).to.eql(expected[idx]);
        })
    });
});