const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${a1} !== ${a2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    let letter = sentence[index].toLowerCase();
    // console.log(letter);
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }
  // console.log(results)
  return results;
};

// assertArraysEqual(letterPositions('Hello Youssef').h, ['0' ]);
// assertArraysEqual(letterPositions('Hello Youssef').e, [ '1', '11' ]);

module.exports = letterPositions