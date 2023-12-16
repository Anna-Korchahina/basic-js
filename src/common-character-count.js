const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split(''),
    arr2 = s2.split('');
  let totalCommonCharacterCount = 0;

  let resultS1 = {};
  arr1.forEach(function (a) {
    resultS1[a] = resultS1[a] + 1 || 1;
  });

  let resultS2 = {};
  arr2.forEach(function (a) {
    resultS2[a] = resultS2[a] + 1 || 1;
  });

  for (let key in resultS1) {
    if (key in resultS2) {
      totalCommonCharacterCount += Math.min(Number(resultS1[key]), Number(resultS2[key]));
    }
  }

  return totalCommonCharacterCount;
}

module.exports = {
  getCommonCharacterCount
};
