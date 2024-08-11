function isPrime(primes, num) {
  for (let i = 0; i < primes.length; i++) {
    if (num % primes[i] === 0) {
      return "no";
    } else {
      return "yes";
    }
  }
}

var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];
isPrime(primes, 73);
// ==========
function convertToBinary(num) {
  if (num < 0) {
    throw new Error("Negative numbers are not supported");
  }
  return num.toString(2);
}
convertToBinary(100);

// =======fibonacci====
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(4));

// =======factorial
function factorialRecursive(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}
