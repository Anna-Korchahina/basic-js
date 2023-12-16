const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const value = String(n).split('');
  const arr = [];

  for (let i = 0; i < value.length; i++) {
    const array = String(n).split('');
    array.splice(i, 1);
    arr.push(Number(array.join('')));
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
