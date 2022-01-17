const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${a1} !== ${a2}`);
  }
};

// // Tests
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, 31]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual