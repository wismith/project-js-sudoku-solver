CREATE TABLE IF NOT EXISTS boards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  board_string TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS board_rows (
  id INTEGER PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS board_columns (
  id INTEGER PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS board_blocks (
  id INTEGER PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS board_cells (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  row_id INTEGER NOT NULL,
  column_id INTEGER NOT NULL,
  block_id INTEGER NOT NULL,
  cell_value INTEGER NOT NULL,
  board_id INTEGER NOT NULL,
  FOREIGN KEY (board_id) REFERENCES boards(id),
  FOREIGN KEY (row_id) REFERENCES board_rows(id),
  FOREIGN KEY (column_id) REFERENCES board_columns(id),
  FOREIGN KEY (block_id) REFERENCES board_blocks(id)
);

INSERT INTO board_columns
VALUES (0),
       (1),
       (2),
       (3),
       (4),
       (5),
       (6),
       (7),
       (8);

INSERT INTO board_rows
VALUES (0),
       (1),
       (2),
       (3),
       (4),
       (5),
       (6),
       (7),
       (8);

INSERT INTO board_blocks
VALUES (1),
       (2),
       (3),
       (4),
       (5),
       (6),
       (7),
       (8),
       (9);
