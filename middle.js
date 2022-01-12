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

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      middleArray.push(array[(array.length / 2) - 1]);
      middleArray.push(array[array.length / 2]);
      return (middleArray);
    } else {
      middleArray.push(array[Math.floor(array.length / 2)]);
      return (middleArray);
    }
  }
};

middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);