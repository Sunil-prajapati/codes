function test() {
  salary = 1300;
  //   console.log(salary);
}
test(); // output will be 1300 because of it' store into global variable
// to avoid this we should use typescript or use strict mode

// =================================================================
function sam() {
  //   console.log(sam.abc);
}
sam();
sam.abc = 400;
sam.abc = 600;
sam();

// ============================= =================================================
// let a = {
//   name: "Aazad",
// };

// let b = {
//   ...a,
// };

// b.name = "Bazad";
// console.log(a);

// =========================================================================
let ab = 10;
let bc = new Number(10);
let ca = 10;
// console.log(a === b);
// console.log(b === ca);
// both false because of object
// ============================================================================
function test2(record) {
  if (record == { age: 18 }) {
    console.log("you are an adult");
  } else if (record === { age: 18 }) {
    console.log("you are an elder");
  } else {
    console.log("you are a child");
  }
}

//test2({ age: 18 });  output will bw else part because of object refrence matching

// ================================================================
// console.log(+true);   //change into integer
// console.log(!"test");   // truthy value

// ==============================================================
var a = {};
var b = { key: "b" };
var c = { key: "c" };

a[b] = 600;
b[c] = 700;

// console.log(a[c]);
// console.log(a[b]);
// console.log(b[b]);
// console.log(b[c]);
// ============================================================================
let str = "abc";
let str2 = 123456;
// output : a1b2c3456
