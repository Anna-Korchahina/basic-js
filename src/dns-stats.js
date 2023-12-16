const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let dom of domains) {

    const arr = dom.split('.').reverse();

    for (let i = 0; i < arr.length; i++) {
      const way = '.' + arr.slice(0, i + 1).join('.');
      if (result[way]) {
        result[way] += 1;
      } else {
        result[way] = 1;
      }
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
