function isPositiveDominant(a) {
  let objCount = {
    positive: 0,
    negative: 0,
  };
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (!newArray.includes(a[i])) {
      newArray.push(a[i]);
      if (a[i] >= 0) {
        objCount.positive++;
      } else {
        objCount.negative++;
      }
    }
  }
  if (objCount.positive > objCount.negative) {
    return true;
  } else {
    return false;
  }
}
const result = isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]);
console.log(result);
