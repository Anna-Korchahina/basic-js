const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  let additionRepeat = '';
  let strRepeat = '';


  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }
  if (separator === undefined) {
    separator = '+';
  }
  if (addition === undefined) {
    addition = '';
  }
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  if (additionSeparator === undefined) {
    additionSeparator = '|';
  }

  additionRepeat = ((addition + additionSeparator).repeat(additionRepeatTimes - 1)) + addition;
  strRepeat = ((str + additionRepeat + separator).repeat(repeatTimes - 1)) + (str + additionRepeat);
return strRepeat;

}

module.exports = {
  repeater
};