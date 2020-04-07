const chai = require('chai');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const {program, name} = require('./index');

chai.use(deepEqualInAnyOrder);

describe(name, () => {
    const inputs = [
        ["eat", "tea", "tan", "ate", "nat", "bat"],
        [],
        ["laugh", "rat", "art", "tar", "dam", "mad", "beam"]
    ];

    const expected = [
        [
            ["ate","eat","tea"],
            ["nat","tan"],
            ["bat"]
          ],
          [],
          [
              ["laugh"],
              ["rat", "art", "tar"],
              ["dam", "mad"],
              ["beam"]
          ]
    ];

    inputs.forEach((input, idx) => {
        it(`Test Case# ${idx + 1}`, () => {
            chai.expect(program(input)).to.deep.equalInAnyOrder(expected[idx]);
        })
    });
});