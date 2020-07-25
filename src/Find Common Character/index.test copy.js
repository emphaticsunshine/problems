const chai = require('chai');
const { program, name } = require('./index');

describe(name, () => {
    const inputs = [
        123,
        1,
        0,
        -12,
        120,
        '232323d'
    ];

    const expected = [
        321,
        1,
        0,
        -21,
        21,
        'error'
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            if(expected[idx] !== 'error') {
                chai.expect(program(input)).to.equal(expected[idx]);
            } else {
                chai.expect(() => {
                    program(input);
                }).to.throw();
            }
        })
    });
});