var removeDuplicates = function (nums) {
  let obj = {};
  for (let item of nums) {
    obj[item] = (obj[item] || 0) + 1;
  }
  let newArr = [];
  for (let [key, value] of Object.entries(obj)) {
    if (value > 1) {
      for (let i = 1; i < 3; i++) {
        newArr.push(parseInt(key));
      }
    } else {
      newArr.push(parseInt(key));
    }
  }
  return newArr;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
