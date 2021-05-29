// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {}

  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

function slowFib(n) {
  // solution 1, iterative
  // const result = [0, 1]

  // for (let num = 2; num <= n; num++) {
  //   result.push(result[num - 2] + result[num - 1])
  // }

  // return result[n]

  // solution 2, recursive
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)

module.exports = fib;
