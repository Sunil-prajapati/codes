function numberSquares(n) {
  let totalSquares = 0;
  for (let k = 1; k <= n; k++) {
    totalSquares += (n - k + 1) ** 2;
  }
  return totalSquares;
}

// console.log(numberSquares(4));

// ====2
function tuckIn(arr1, arr2) {
  arr1.splice(1, ...arr2);
  return arr1;
}
tuckIn([1, 2], [49, 5, 3, 22, [30, 68], [342, 343, 2323, 23, 12]]);

// === Number Split ===
function numberSplit(n) {
  let a = Math.floor(n / 2);
  let b = Math.ceil(n / 2);
  return [a, b];
}
const numbersArray = numberSplit(9);
// console.log(numbersArray);
// ========
function filterArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] === "string") {
      arr.splice(i, 1);
    }
  }
  return [...new Set(arr)];
}
const re = filterArray([1, 2, "a", "b"]);
// console.log(re);

// =======
function toArray(obj) {
  let arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push([key.toString(), value]);
  }
  return arr;
}

// console.log(toArray({ shrimp: 15, tots: 12 }));
// ====
function addName(obj, name, value) {
  let newObj = {
    ...obj,
    [name]: value,
  };
  return newObj;
}
console.log(addName({ piano: 500 }, "Brutus", 400));
