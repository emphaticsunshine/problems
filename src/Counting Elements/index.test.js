const chai = require('chai');
const {program, name} = require('./index');

describe(name, () => {
    const inputs = [
        [1,2,3],
        [1,1,3,3,5,5,7,7],
        [1,3,2,3,5,0],
        [1,1,2,2],
        [1,1,2]
    ];

    const expected = [
        2,
        0,
        3,
        2,
        2
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            chai.expect(program(input)).to.equal(expected[idx]);
        })
    });
});