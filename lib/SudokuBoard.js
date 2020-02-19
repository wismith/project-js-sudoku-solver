let Cell = require('./Cell');

class SudokuBoard {
  static createFromString(boardString) {
    let cells = [];
    for (let i = 0; i < boardString.length; i++) {
      cells.push(new Cell(Number(boardString[i]), Math.floor(i / 9), i % 9));
    }
    return new SudokuBoard(cells);
  }

  constructor(cells) {
    this.cells = cells;
  }

  solution() {
    // This is your job. :)
  }

  toString() {
    // This is your job. :)
  }
}

module.exports = SudokuBoard;
