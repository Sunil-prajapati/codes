var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Sno");
myMap.set(3, "dos");
myMap.set(4, "tres");

// console.log(myMap.get(4));
// console.log(myMap.has(4));
// console.log(myMap.keys());
// console.log(myMap.size);
// myMap.clear(); to delete all key value pairs

console.log(myMap);

// normal way to get data from object

// for (let keys of myMap.keys()) {
//   console.log(keys, "keys ");
// }

// for (let values of myMap.values()) {
//   console.log(values, "values");
// }

// for (let [key, value] of myMap) {
//   console.log(key + " - " + value);
// }

// NOTE: for loop always gives keys first then value but in the case of forEach it opposite

// confusion little bit here
// myMap.forEach((value, key) => console.log(value, " - " + key));
