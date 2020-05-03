const chai = require('chai');
const { program, program2, name } = require('./index');

describe(name, () => {
    const inputs = [
        [0,1,0,2,1,0,1,3,2,1,2,1]
    ];

    const expected = [
       6
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            chai.expect(program(input)).to.equal(expected[idx]);
            chai.expect(program2(input)).to.equal(expected[idx]);
        })
    });
});