const assertArraysEqual = require('./assertArraysEqual');

const tail = function(arr) {
  return arr.slice(1, arr.length);
};

module.exports = tail;