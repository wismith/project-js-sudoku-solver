class Cell {
  constructor(value, row, column, id = undefined) {
    this.value = value;
    this.row = row;
    this.column = column;
    this.block = function(row, column) {
      let startWith;
      if (row < 3) {
        startWith = 1;
      } else if (row < 6) {
        startWith = 4;
      } else if (row < 9) {
        startWith = 7;
      }
      let columnSection = Math.floor(column / 3);
      return startWith + columnSection;
    };
    this.id = id;
  }

  replaceValue(newValue) {
    this.value = newValue;
  }
}

module.exports = Cell;
