var isValid = function (s) {
  let newArray = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      newArray.push(s[i]);
    } else if (s[i] === ")" && newArray.pop() !== "(") {
      return false;
    } else if (s[i] === "]" && newArray.pop() !== "[") {
      return false;
    } else if (s[i] === "}" && newArray.pop() !== "{") {
      return false;
    }
  }
  return true;
};

// ======= merge two sorted list ======
var mergeTwoLists = function (list1, list2) {
  const concatedArray = list1.concat(list2);
  const sortedArray = concatedArray.sort((a, b) => a - b);
  return sortedArray;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
