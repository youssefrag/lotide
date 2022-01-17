const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);

const arr2 = ['1', '2', '3', '4', '5']
assertArraysEqual(tail(arr2), ['2', '3', '4', '5'])