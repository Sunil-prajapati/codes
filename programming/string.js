// Reverse Words in a String
function reverseWords(str) {
  const trimmed = str.trim();
  const words = trimmed.split(" ");
  return words.reverse().join(" ");
}
reverseWords("a good example");

// Currying Functions
function multiply(a) {
  return function (b) {
    return a.map((val) => val * b);
  };
}
multiply([2, 4, 5])(10);

// Remove Duplicates from an Array
function removeDups(arr) {
  //   return [...new Set(arr)];     inbuilt method
  const uniqueOne = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueOne.includes(arr[i])) {
      uniqueOne.push(arr[i]);
    }
  }
  return uniqueOne;
}
removeDups([13, "Apple", 3, "Orange", "Apple"]);

// Find the Missing Number
function missingNum(arr) {
  let number;
  for (let i = 0; i <= 10; i++) {
    if (!arr.includes(i)) {
      number = i;
    }
  }
  return number;
}
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]);
