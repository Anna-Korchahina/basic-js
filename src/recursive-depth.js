const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {

    let depth = 0;
    array.forEach(arr => {
      if (arr instanceof Array) {
        depth = Math.max(depth, this.calculateDepth(arr));
      }
    });

    return depth + 1;
  }
}

module.exports = {
  DepthCalculator
};