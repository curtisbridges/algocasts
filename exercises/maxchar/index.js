// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {}
  for (const character of str) {
    if (map[character]) {
      map[character]++
    } else {
      map[character] = 1
    }
  }

  let maxChar = str[0]
  for (const key in map) {
    if (map[key] > map[maxChar]) {
      maxChar = key
    }
  }
  return maxChar
}

module.exports = maxChar;
