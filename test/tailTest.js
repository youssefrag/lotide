const assert = require('chai').assert;
const tail = require('../tail');

// const words = ['Yo Yo', 'Lighthouse', 'Labs'];
// assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);

// const arr2 = ['1', '2', '3', '4', '5']
// assertArraysEqual(tail(arr2), ['2', '3', '4', '5'])

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['1', '2', '3', '4', '5']), ['2', '3', '4', '5']);
  });
})