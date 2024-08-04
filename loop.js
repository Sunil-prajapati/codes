// console.log("program started");

let num = 0;
while (num < 10) {
  //   console.log("hello", num);
  num++;
}
// console.log("program end");

for (let i = 0; i < 10; i++) {
  // for loop is best because of scope thing
  // wec can't use const here because we have update the value of ot
  // console.log("hello", i);
}

// === Do while ====
// do while is different it runs at least once
let i = 10;
do {
  //   console.log("hello", i);
  i++;
} while (i < 5);

//===== for of ===
// for loop is not only for array we can also iterable data
const fruits = ["banana", "apple", "orange", "pepper"];
for (const fruit of fruits) {
  // fruit store it's last value in memory of global scope(if we don't use variable like const )
  // here we can use const because every time it's create new variable for it's item
  //   console.log(fruit);
}

// object is not iterable
// that's why we have to use for in loop

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (const key in person) {
  // this is not good practice because in loop is heavier compare than normal loops
  //   console.log(person[key]);
}

const personKeys = Object.keys(person);
const personValues = Object.values(person);
const personEntries = Object.entries(person);

for (const entries of personEntries) {
  //   console.log(entries);
}
// with this we got all the keys now we can use for of loop

// how to check if any key is available in object or not
const result = "firstName" in person;
// console.log(result);

// ====for each is methods===
// it always return undefined

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    // arguments not work in arrow function and also it is not preferable way
    sum += arguments[i];
  }
  return sum;
}
const plus = add(1, 2, 3, 4, 5, 6, 7, 67, 45, 67);
// console.log(plus);

const addAnyNumber = (...num) => {
  // best way to do
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
};
// console.log(addAnyNumber(1, 2, 3, 4, 5, 6, 7, 67, 45, 67));

// === advance ====
for (let j = 0; j < 3; i++) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}

// expression we can store in any variable
