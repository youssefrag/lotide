const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};

  for (let index in string) {
    let letter = string[index].toLowerCase();
    // console.log(letter)
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

console.log(countLetters('Lighthouse').toString());
console.log(countLetters('Labs'));
console.log(countLetters('hello'));

assertEqual(countLetters('Lighthouse'), { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1 });
assertEqual(countLetters('Labs'), { l: 1, a: 1, b: 1, s: 1 });
assertEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });