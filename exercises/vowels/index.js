// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = 'aeiou'

  let numVowels = 0
  for (const vowel of vowels) {
    numVowels += str.toLowerCase().split(vowel).length - 1
  }

  return numVowels

  // solution 2, regex!
  // const matches = str.match(/[aeiou]/gi)
  // return matches ? matches.length : 0
}

module.exports = vowels;
