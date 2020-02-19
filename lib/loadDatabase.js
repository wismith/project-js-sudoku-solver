const Database = require('better-sqlite3');
const fs = require('fs');

let boardStrings = fs.readFileSync('../unsolved.small.txt', 'utf-8').trim().split('\n');
console.log(boardStrings);

let db = new Database('./board.db');

const insert = db.prepare('INSERT INTO boards (board_string) VALUES (@boardString);');

for (let string of boardStrings) {
  insert.run({ boardString: string });
}
