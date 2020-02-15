let SudokuBoard = require('./lib/SudokuBoard');

let boardString = '619030040270061008000047621486302079000014580031009060005720806320106057160400030';

let board = new SudokuBoard(boardString);

console.log('--- Starting Board ---');

console.log(board.toString());
