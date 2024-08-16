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
  return objCount.positive > objCount.negative;
}
isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]);

// ===== Left Shift by Powers of Two ====
function shiftToLeft(num, shift) {
  if (shift === 0) {
    return num;
  }
  return 2 * shiftToLeft(num, shift - 1);
}
const result = shiftToLeft(-32, 2);
console.log(result);
