const chai = require('chai');
const { program, name } = require('./index');

describe(name, () => {
    const inputs = [
        [
            [0,1,0],
            [0,0,1],
            [1,1,1],
            [0,0,0]
          ]
    ];

    const expected = [
        [
            [0,0,0],
            [1,0,1],
            [0,1,1],
            [0,1,0]
          ]
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            chai.expect(program(input)).to.eql(expected[idx]);
        })
    });
});