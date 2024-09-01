function findBrokenKeys(str1, str2) {
  let newArray = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i] && !newArray.includes(str1[i])) {
      newArray.push(str1[i]);
    }
  }
  return newArray;
}

findBrokenKeys("!!??$$", "$$!!??");

function returnDistinctUnique(array) {
  let object = {};
  for (let index = 0; index < array.length; index++) {
    if (object.hasOwnProperty(array[index])) {
      object[array[index]] = 2;
    } else {
      object[array[index]] = 1;
    }
  }
  let newArray = [];
  for (const obj in object) {
    if (object[obj] < 2) {
      newArray.push(obj);
    }
  }
  return newArray;
}
returnDistinctUnique([-9, -9, -9, 7, -9, -9, 1]);

function splitBunches(bunches) {
  let newArray = [];
  for (let i = 0; i < bunches.length; i++) {
    if (bunches[i].quantity > 1) {
      for (let j = 0; j < bunches[i].quantity; j++) {
        newArray.push({
          name: bunches[i].name,
          quantity: 1,
        });
      }
    } else {
      newArray.push(bunches[i]);
    }
  }
  return newArray;
}
const result = splitBunches([
  { name: "cherry tomatoes", quantity: 3 },
  { name: "bananas", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "cherry tomatoes", quantity: 3 },
]);
console.log(result);
