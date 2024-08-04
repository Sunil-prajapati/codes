// =============================    Time complexity ======================================

const funnyNumberOne = (array) => {
  // 4 operation (because it runs from zero to 3 and 4 is sum of the operation)
  for (let i = 0; i < array.length; i++) {
    if (i === 3) return array[i];
  }
};

const funnyNumber = (array) => {
  // 1 operation (0(1))
  return array[array.length - 1];
};

const nums = [420, 732, 47, 38];

console.time("funnyNumber");
console.log(funnyNumber(nums));
console.log(funnyNumberOne(nums));
console.timeEnd("funnyNumber");

// ========== second example =================

function someOperation(n) {
  // 3 operations (always same operation) so o(1)
  return (n * (n + 5)) / 2;
}
console.log(someOperation(2));

function goingUpDown(n) {
  // 2n + 3 (total operations) o(n) because depend on variable n
  // increase constant manner
  console.log("starting up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the end going up");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("at the start");
}

function printBoth(n) {
  // o(n^2) increase exponentially manner
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printBoth(5));
