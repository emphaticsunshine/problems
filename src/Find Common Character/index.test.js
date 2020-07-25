const chai = require('chai');
const { program, name } = require('./index');

describe(name, () => {
    const inputs = [
        ["bella","label","roller"],
        ["cool","lock","cook"],
        ["cat", "for"]
    ];

    const expected = [
        ["e","l","l"],
        ["c","o"],
        [],
        []
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            if(expected[idx] !== 'error') {
                chai.expect(program(input)).to.eql(expected[idx]);
            }
        })
    });
});