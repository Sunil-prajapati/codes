function findSecondLargest(nums) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of nums) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  if (second === -Infinity) {
    throw new Error("no second largest number");
  }
  return second;
}
console.log(findSecondLargest([7, 7, 7, 1, 7]));
