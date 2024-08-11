let arr = ["a", "b", "c", "d", "e", "f"];
// output = "e"
// console.log(arr[arr.length - 2]);

// =========

// console.log(3 - "3");
//first convert string into number

// === shuffle elements of array

const shuffle = [1, 2, 3, 4, 5];
const first = shuffle.splice(0, 1);
const last = shuffle.splice(shuffle.length - 1, 1);
shuffle.push(...first);
shuffle.unshift(...last);

// =====reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, initial) => acc + initial, 0);

// =====how many times elements in array ===

const all = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 6];
// output = { 1: 1, 2: 2, 3: 1, 4: 2, 5: 1, 6: 1 };
// Object.assign(obj,{[key]:all[value]})

let obj = {};
for (let i = 0; i < all.length; i++) {
  if (obj[all[i]]) {
    obj[all[i]]++;
  } else {
    obj[all[i]] = 1;
  }
  Object.assign(obj);
}

// =========divisible by 2 and add into object ==

const divisibleByTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let obj2 = {};
divisibleByTwo.forEach((e) => {
  if (e % 2 === 0) {
    obj2[e] = 2;
  } else {
    obj2[e] = 1;
  }
});
