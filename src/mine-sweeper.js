const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mines = [],
  fieldLength = matrix[0].length,
  matrixLength = matrix.length;
let minesCount = 0;

for (let i = 0; i < matrixLength; i++) {
  let str = [];
  for (let j = 0; j < fieldLength; j++) {
    if (matrix[i][j] == true) {
      str.push('mine');
    } else {
      str.push('nope');
    }
  }
  mines.push(str);
}

for (let i = 0; i < matrixLength; i++) {
  for (let j = 0; j < fieldLength; j++) {
    if (mines[i][j] === 'nope') {
      // findMines();

      // find horizont:
      if (j > 0) {
        if (mines[i][j - 1] === 'mine') {
          minesCount += 1;
        }
      }
      if (j < (fieldLength - 1)) {
        if (mines[i][j + 1] === 'mine') {
          minesCount += 1;
        }
      }

      // find vertical:
      if (i > 0) {
        if (mines[i - 1][j] === 'mine') {
          minesCount += 1;
        }
      }
      if (i < (matrixLength - 1)) {
        if (mines[i + 1][j] === 'mine') {
          minesCount += 1;
        }
      }

      // find left diagonal:
      if (i > 0 && j > 0) {
        if (mines[i - 1][j - 1] === 'mine') {
          minesCount += 1;
        }
      }
      if ((i < (matrixLength - 1)) && (j > 0)) {
        if (mines[i + 1][j - 1] === 'mine') {
          minesCount += 1;
        }
      }

      // find right diagonal:
      if ((i > 0) && (j < (fieldLength - 1))) {
        if (mines[i - 1][j + 1] === 'mine') {
          minesCount += 1;
        }
      }
      if ((i < (matrixLength - 1)) && (j < (fieldLength - 1))) {
        if (mines[i + 1][j + 1] === 'mine') {
          minesCount += 1;
        }
      }

      mines[i][j] = minesCount;
      minesCount = 0;

    }


  }
}

for (let i = 0; i < mines.length; i++) {
  for (let j = 0; j < fieldLength; j++) {
    if (mines[i][j] === 'mine') {
      mines[i][j] = 1;
    }
  }
}



return mines;
}

module.exports = {
  minesweeper
};
