/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 == 0) {
    return false;
  } else return true;
}

// let testNumber = 5;
// let result = isOdd(testNumber);
// console.log(` ${testNumber} is ${result}`);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 == 0) {
    return n * 2;
  } else return n * n;
}

let testNumber = 5;
let result = squareOrDouble(testNumber);
console.log(` ${testNumber} result =  ${result}`);
