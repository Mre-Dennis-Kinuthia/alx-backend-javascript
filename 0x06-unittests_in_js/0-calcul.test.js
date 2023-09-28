const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  const testCalculateNumber = ({a, b, expected}) => function () {
    const result = calculateNumber(a, b);
    assert.equal(result, expected);
  };

  it(`correctly adds 1 and 2`, testCalculateNumber({a: 1, b: 2, expected: 3}));
  it(`correctly adds 1.3 and 3.7`, testCalculateNumber({a: 1.3, b: 3.7, expected: 5}));
  it(`correctly adds 1 and 3.7`, testCalculateNumber({a: 1, b: 3.7, expected: 5}));
  it(`correctly adds 1.3 and 3`, testCalculateNumber({a: 1.3, b: 3, expected: 4}));
  it(`correctly adds 1 and -2`, testCalculateNumber({a: 1, b: -2, expected: -1}));
  it(`correctly adds 10000 and 200000`, testCalculateNumber({a: 10000, b: 200000, expected: 210000}));
  it(`correctly adds -1.3 and 3.7`, testCalculateNumber({a: -1.3, b: 3.7, expected: 3}));
  it(`correctly adds -1 and -2`, testCalculateNumber({a: -1, b: -2, expected: -3}));
});
