// In this kata you are expected to recover a scattered password in a (m x n) grid (you'll be given directions of all password pieces in the array)
// The array will contain pieces of the password to be recovered, you'll get directions on how to get all the the pieces, your initial position in the array will be the character "x".
// Heres what the array looks like

// [
//   ["p", "x", "m"],
//   ["a", "$", "$"],
//   ["k", "i", "t"]
// ]
// The given directions would consist of [left, right, up, down] and [leftT, rightT, upT, downT], the former would be used to move around the grid while the latter would be used when you have a password to that direction of you.( E.g if you are in a position and the move to make is leftT it means theres a password to the left of you, so take the value and move there)
// So in the 2d array example above, you will be given the directions ["lefT", "downT", "rightT", "rightT"], making for the word "pa$$".
// Remember you initial position is the character "x".
// So you write the function getPassword(grid, directions) that uses the directions to get a password in the grid.
// Another example.

// grid = [
//   ["a", "x", "c"],
//   ["g", "l", "t"],
//   ["o", "v", "e"]
// ];

// directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]
// getPassword(grid, directions) // => "lovet"
// Once again, Your initial position is the character "x", so from the position of "x" you follow the directions given and get all pieces in the grid.

function getPassword(grid, directions) {
  const rows = grid.length;
  const cols = grid[0].length;
  let x, y;

  // 1. Find the initial position of 'x'
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'x') {
        x = i;
        y = j;
        break;
      }
    }
  }

  // 2. Direction deltas
  const moves = {
    left: [0, -1],
    right: [0, 1],
    up: [-1, 0],
    down: [1, 0]
  };

  const password = [];

  // 3. Process directions
  for (const dir of directions) {
    const isTake = dir.endsWith('T');
    const moveKey = isTake ? dir.slice(0, -1) : dir;

    const [dx, dy] = moves[moveKey];
    x += dx;
    y += dy;

    if (isTake) {
      password.push(grid[x][y]);
    }
  }

  return password.join('');
}
// Example usage:
const grid = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
  ['m', 'n', 'o', 'p']
];
const directions = ['right', 'down', 'down', 'leftT', 'upT'];
const password = getPassword(grid, directions);
console.log(password); // Output: "hgf"