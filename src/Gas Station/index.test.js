const chai = require('chai');
const {program, name} = require('./index');

describe(name, () => {
    const inputs = [
        [[1,2,3,4,5], [3,4,5,1,2]],
        [[2,3,4], [3,4,3]]
    ];

    const expected = [
        3,
        -1
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            chai.expect(program.apply(null, input)).to.equal(expected[idx]);
        })
    });
});