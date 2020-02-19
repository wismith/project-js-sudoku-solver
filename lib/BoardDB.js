let SudokuBoard = require('./SudokuBoard');

class BoardDB {
  constructor(database) {
    let Database = require('better-sqlite3');
    this.db = new Database(database);
  }

  loadSudokuBoard(i) {
    const boardString = this.db.prepare('SELECT board_string FROM boards WHERE id = ?').get(i);
    return SudokuBoard.createFromString(boardString);
  }
}

module.exports = BoardDB;
