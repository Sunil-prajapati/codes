// ====== space complexity======

// it depends on size of input, data structure and algorithm

const funnyNumber = (array) => {
  let sum = 0;
  //always return one single value
  //   o(1) Space complexity
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

let score = [345, 23, 363, 37];
console.log(funnyNumber(score));

// =====
const funnyNumberArray = (n) => {
  //o(n)  Space complexity (same input number same output number)
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};

console.log(funnyNumberArray(5));

// if exponential output then o(n^2) space complexity      e.g give input 10 and output will 100

// primitive types
// Boolean, num, undefined, null; => Constant
// String, array, object,; => dynamic space complexity(depends on input size)
