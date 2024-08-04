// 1. find out the second largest number from array

const arr1 = [1, 2, 3, 4, 5, 56, 78, 34, 56, 78, 86];
const arr2 = [14, 25, 33, 4, 5, 5, 32];

function findSecondLargestNumber(array) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > largest) {
      secondLargest = largest;
      largest = array[index];
    } else if (array[index] != largest && array[index] > secondLargest) {
      secondLargest = array[index];
    }
  }
  console.log(secondLargest);
}

findSecondLargestNumber(arr2);
