/**
 * checkForWinner.js
 * 
 * @author Gabriel Sessions - JumboCode Fall 2024
 * @description Contains the checkForWinner function used to check
 * if a player has won Tic-Tac-Toe in TicTacToe.jsx
 */


/**
 * checkForWinner
 * @todo Complete the rest of this function!
 * 
 * @description Given a Tic-Tac-Toe game board, this function determines if 
 * there is a winner.
 * @param {Array<Array<string|null>>} board - A 2D array of strings or null 
 * values that represent moves on a Tic-Tac-Toe board.
 * @returns {string|null} - "X" if X is a winner, "O" if O is a winner, null
 * if there is no winner
 * @assumption X and O cannot both be winners (ignore invalid cases)
 * 
 * @note This is **NOT** a React component, just a normal JS function
 * @note The `export` and `default` keywords are used to make this function
 * accessible in TicTacToe.jsx
 */
export default function checkForWinner(board) {
  // Check if the board is valid, exit early if it's not
  if (!board) {
    console.error("checkForWinner was not given a valid Tic-Tac-Toe board");
    return null;
  }

  // Checking if a player has any horizontal or vertical or diagonal wins
const boardSize = board.length;  // Assuming a square board

// Checking for horizontal wins
for (let row = 0; row < boardSize; row++) {
  let firstCell = board[row][0];

  // Skip rows with empty first spaces
  if (firstCell === null) {
    continue;
  }

  let isWinningRow = true;
  for (let column = 1; column < boardSize; column++) {
    if (board[row][column] !== firstCell) {
      isWinningRow = false;
      break;
    }
  }

  if (isWinningRow) {
    return firstCell;  // Return player found in winning row
  }
}

// Checking for vertical wins
for (let col = 0; col < boardSize; col++) {
  let firstCell = board[0][col];

  // Skip columns with empty first spaces
  if (firstCell === null) {
    continue;
  }

  let isWinningColumn = true;
  for (let row = 1; row < boardSize; row++) {
    if (board[row][col] !== firstCell) {
      isWinningColumn = false;
      break;
    }
  }

  if (isWinningColumn) {
    return firstCell;  // Return player found in winning column
  }
}

// Checking for main diagonal (top-left to bottom-right)
let firstCellMainDiagonal = board[0][0];
if (firstCellMainDiagonal !== null) {
  let isWinningDiagonal = true;
  for (let i = 1; i < boardSize; i++) {
    if (board[i][i] !== firstCellMainDiagonal) {
      isWinningDiagonal = false;
      break;
    }
  }

  if (isWinningDiagonal) {
    return firstCellMainDiagonal;  // Return player found in winning main diagonal
  }
}

// Checking for anti-diagonal (top-right to bottom-left)
let firstCellAntiDiagonal = board[0][boardSize - 1];
if (firstCellAntiDiagonal !== null) {
  let isWinningAntiDiagonal = true;
  for (let i = 1; i < boardSize; i++) {
    if (board[i][boardSize - i - 1] !== firstCellAntiDiagonal) {
      isWinningAntiDiagonal = false;
      break;
    }
  }

  if (isWinningAntiDiagonal) {
    return firstCellAntiDiagonal;  // Return player found in winning anti-diagonal
  }
}

// No winner found, return null
return null;

}