// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // total = 1:1, 2:3, 3:5
  // spaces left, right = 1:0, 2:1, 3:2...
  // hashes = 1:1, 2:3, 3:5...
  const numChars = 2 * n - 1
  for (let i = 1; i <= n; i++) {
    const numHashes = 2 * i - 1
    const numSpaces = Math.floor((numChars - numHashes) / 2)

    const spaces = ' '.repeat(numSpaces)
    const hashes = '#'.repeat(numHashes)

    console.log(spaces + hashes + spaces)
  }
}

module.exports = pyramid;
