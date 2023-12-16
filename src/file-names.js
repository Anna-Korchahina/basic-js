const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return names;
  }

  const general = {},
    result = [];

  for (let el of names) {

    if (el in general) {
      let count = Number(general[el]);
      let repeat = true;
      while (repeat) {
        if (names.includes(`${el}(${count+1})`)) {
          count += 1;
        } else {
          result.push(`${el}(${count+1})`);
          repeat = false;
          break;
        }
      }

    } else {

      let count = 0;
      if (result.includes(el)) {
        let repeat = true;
        while (repeat) {
          if (result.includes(`${el}(${count+1})`)) {
            count += 1;
          } else {
            result.push(`${el}(${count+1})`);
            repeat = false;
            break;
          }
        }

      } else {
        result.push(el);
      }

    }
  }

  return result;
}

module.exports = {
  renameFiles
};
