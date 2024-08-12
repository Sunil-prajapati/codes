function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().includes(7)) {
      return "Boom!";
    }
  }
  return "There is no 7 in the array";
}
// console.log(sevenBoom([2, 55, 60, 97, 86]));

function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === arr[i + 1]) {
      if (arr[i] !== arr[i - 1] && arr[i + 1]) {
        count++;
      }
    }
  }
  return count;
}
// console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));

function getLength(arr) {
  return arr.flat(Infinity).length;
}
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

function uniqueStyles(albums) {
  return [...new Set(albums)].length;
}
console.log(
  uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul",
  ])
);

function rotateArray(arr, n) {
  if (n > 1) {
    const splicedArray = arr.splice(arr.length - n);
    const rotatedArray = [...splicedArray, ...arr];
    return rotatedArray;
  } else {
    const splicedArray = arr.splice(arr[0] - n);
    const rotatedArray = [...splicedArray, ...arr];
    return rotatedArray;
  }
}
const result = rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2);
console.log(result);
