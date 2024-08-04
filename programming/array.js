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
