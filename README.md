# Sudoku Solver

Let's write a Sudoku solver in JavaScript!

## Contents <!-- omit in toc -->

- [Sudoku](#sudoku)
- [How To Pay Attention](#how-to-pay-attention)
- [Modeling](#modeling)
  - [1. Nouns And Verbs](#1-nouns-and-verbs)
  - [2. Strategies For Humans](#2-strategies-for-humans)
- [Iterations](#iterations)
  - [[v1] Pseudocode - Single-Guess Cells](#v1-pseudocode---single-guess-cells)
  - [[v2] Creating And Displaying The Board](#v2-creating-and-displaying-the-board)
  - [[v3] Filling In Single-Guess Cells](#v3-filling-in-single-guess-cells)
  - [[v4] Solving Every Sudoku Board](#v4-solving-every-sudoku-board)

## Sudoku

[Sudoku][wiki-sudoku] is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each **column**, each **row**, and each of the nine 3×3 sub-grids (called **boxes**) contains all of the digits from 1 to 9 only once.

The 81 spaces where numbers can be placed are called **cells**.

The person who created the puzzle provides a partial solution so that some squares already contain numbers. Typically, there are enough initial numbers to guarantee a unique solution.

A player "solves" the puzzle through a process of elimination and educated guessing.

| Unsolved  | Solved  |
|---|---|
| ![Unsolved Sudoku][img-unsolved-sudoku] |  ![Solved Sudoku][img-solved-sudoku]
 |

For example, the bottom-right box looks like:

```text
2 8 _
_ _ 5
_ 7 9
```

The cell in the upper right-hand corner of that box *must* contain the value `4`. Why? Because:

- `2, 8, 5, 7, 9` appear in the same box
- `2, 8, 6` appear in the same row
- `1, 3, 5, 6, 9` appear in the same column

The only possible number that could be placed there is `4`.

## How To Pay Attention

Breath: we know this is difficult. When in doubt, take a step back and reflect on how you or someone else plays Sudoku and don't get "stuck" in the code.

It's important to understand how *you*, as a human, play Sudoku. What strategies do you employ? Why? What decisions do you make? Why? What notation do you use? Why?

As you pay attention to how *you* solve Sudoku, remember that a computer is happy to do the same thing over and over, can create unlimited copies of the Sudoku board, and has a perfect memory.

Are there strategies you're ruling out because it'd take to long or be too tedious for *you*, a human, to do?

You should *absolutely*, *unequivocally* try to solve a few Sudoku puzzles on your own to give you space to reflect on your process. If you're in a group, solve the same puzzle independently and compare approaches after that fact.

## Modeling

Before we get to code, let's spend time modeling the problem for ourselves.

### 1. Nouns And Verbs

Think carefully about all the nouns and verbs in a Sudoku game. There's the person who created the puzzle (the setter). There's the person who is solving the puzzle (the player). What are the important parts of the board called?  How do the player and setting interact with them?

A computer program that solves Sudoku is simulating the *player*, which means the better you can empathize with the player the more likely you'll understand how to write a Sudoku solver. You'll be tempted to focus on the board first – is it some kind of array, an object, something else? – but don't!  Understanding the person playing the game is key; the code to "power" the board is a detail.

What nouns and verbs would the *player* reference when playing Sudoku?

### 2. Strategies For Humans

Print out 2-3 actual, physical Sudoku puzzles and try to solve them. Spend 5-15 minutes per puzzle. You don't need to solve them completely, but you do need time to reflect on your approach.

If you're in a group, work on the first puzzle independently and compare notes afterwards. Try to solve the other puzzles together.

Here are some websites with printable Sudoku puzzles of "easy" difficulty:

- <https://krazydad.com/sudoku/index.php?sv=EZ>
- <https://www.memory-improvement-tips.com/printable-sudoku-puzzles.html>

As you play, take note of...

1. What strategies are you adopting and why?
2. How do you choose where to start?
3. How do you know when to really put a number in a cell?
4. Did you adopt the same notation/board markings while playing Sudoku?  Why?  If not, why did you choose differently?
5. Are you avoiding any strategies because they're too tedious or require you to remember too much?

It's important to see that sometimes the strategies that work for us (humans) would be really hard to implement on a computer, and vice versa: strategies we avoid because we'd have to write too much, use too many sheets of paper, or remember too much are a cakewalk for a computer.

## Iterations

Now that you've built some familiarity with playing Sudoku, let's try to encapsulate some of that into code.

We'll start by only filling in the cells where there's only one possible "guess" (like the example from the [Sudoku](#sudoku) section above). Later, we'll deal with the case where we can't rule out all-but-one potential number.

### [v1] Pseudocode - Single-Guess Cells

This program is complex enough that we think you should write pseudocode before you start writing JavaScript.

Remember, for the first iteration, we're just going build a solver that fills in "logically necessary" squares, i.e., the cells that only have one possible guess. This might not solve every Sudoku board, although it often solves the easiest. How can you tell when you've filled in all the "logically necessary" squares?

If you're doing this in a group, write out your pseudocode separately and compare it to each other. How does it differ? Which approach seems more sound? Are there some core operations or functions you need to support?

For example, given a cell, you'll probably need at least three functions:

1. Give me the other cells in that cell's row.
2. Give me the other cells in that cell's column.
3. Give me the other cells in that cell's box.

### [v2] Creating And Displaying The Board

Let's first get the board alone working.

We've written some scaffolded code for you. The `SudokuBoard` constructor should take in a string like this as input:

```text
619030040270061008000047621486302079000014580031009060005720806320106057160400030
```

Each consecutive 9 digits represents a row of the Sudoku board and a `0` represents an empty cell. You can represent the board however you like in code.

Decide how to store the board state inside the `SudokuBoard` class. Remember, eventually you'll be modifying the individual cells, so store it in a format that makes that easy.

Implement a `toString()` method that returns a string like the following so you can easily see the state of the board:

```text
---------------------
6 1 9 | 0 3 0 | 0 4 0
2 7 0 | 0 6 1 | 0 0 8
0 0 0 | 0 4 7 | 6 2 1
---------------------
4 8 6 | 3 0 2 | 0 7 9
0 0 0 | 0 1 4 | 5 8 0
0 3 1 | 0 0 9 | 0 6 0
---------------------
0 0 5 | 7 2 0 | 8 0 6
3 2 0 | 1 0 6 | 0 5 7
1 6 0 | 4 0 0 | 0 3 0
---------------------
```

### [v3] Filling In Single-Guess Cells

Implement a `solution()` method on the `SudokuBoard` class that fills in the cells where only one guess is possible and returns the filled-in board. Print out the filled-in board.

### [v4] Solving Every Sudoku Board

(Coming soon!)

[wiki-sudoku]: http://en.wikipedia.org/wiki/Sudoku
[img-unsolved-sudoku]: http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png
[img-solved-sudoku]: http://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png
