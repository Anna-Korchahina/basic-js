const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == '') {
    return str;
  }
  let answ = '';
  let prev = '';
  let countEl = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === prev) {
      countEl += 1;
    } else {
      countEl += 1;
      if (countEl === 1) {
        answ += prev;
      } else {
        answ += countEl + prev;
      }
      countEl = 0;
      prev = str[i];
    }
    if (i === (str.length - 1)) {
      countEl += 1;
      if (countEl === 1) {
        answ += prev;
      } else {
        answ += countEl + prev;
      }
    }

  }
  return answ;
}

module.exports = {
  encodeLine
};
