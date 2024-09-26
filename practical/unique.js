function returnUnique(arr) {
  let frequencyMap = {};
  for (let elem of arr) {
    frequencyMap[elem] = (frequencyMap[elem] || 0) + 1;
  }
  let uniqueArray = [];
  for (let [key, value] of Object.entries(frequencyMap)) {
    if (value === 1) {
      uniqueArray.push(parseInt(key));
    }
  }
  return uniqueArray;
}
console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
