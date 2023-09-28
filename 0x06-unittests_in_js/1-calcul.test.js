const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  const testCalculateNumber = ({type, a, b, expected}) => function () {
    const result = calculateNumber(type, a, b);
    assert.equal(result, expected);
  };

  it(`correctly adds 1 and 2`, testCalculateNumber({type: 'SUM', a: 1, b: 2, expected: 3}));
  it(`correctly adds 1.3 and 3.7`, testCalculateNumber({type: 'SUM', a: 1.3, b: 3.7, expected: 5}));
  it(`correctly subtracts -2 from 1`, testCalculateNumber({type: 'SUBTRACT', a: 1, b: -2, expected: 3}));
  it(`correctly subtracts 3 from 3`, testCalculateNumber({type: 'SUBTRACT', a: 3, b: 3, expected: 0}));
  it(`correctly divides 1000 with 20`, testCalculateNumber({type: 'DIVIDE', a: 1000, b: 20, expected: 50}));
  it(`correctly divides 1 with 0`, testCalculateNumber({type: 'DIVIDE', a: 1, b: 0, expected: 'Error'}));
});
