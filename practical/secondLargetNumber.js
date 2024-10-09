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
// =========
function findKthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

let numbers = [3, 5, 2, 9, 6];
let k = 2;
console.log(findKthLargest(numbers, k)); // Output: 6
