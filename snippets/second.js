function test() {
  salary = 1300;
  //   console.log(salary);
}
test(); // output will be 1300 because of it' store into global variable
// to avoid this we should use typescript or use strict mode

// =================================================================
function sam() {
  // console.log(sam.abc);
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
// let ab = 10;
// let bc = new Number(10);
// let ca = 10;
// console.log(ab === bc);
// console.log(bc === ca);

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
// console.log(!"test"); // truthy value

// ==============================================================
// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };

// a[b] = 600;
// b[c] = 700;

// console.log(a[c]); //600
// console.log(a[b]); //600
// console.log(b[b]); //700
// console.log(b[c]); //700
// ============================================================================
let str = "abc";
let str2 = 123456;
// output : a1b2c3456

// console.log("10" + 20 + 30);
// //102030;
// console.log(typeof [1, 2, 3]); // object
// function a() {
//   console.log(a, "var"); // undefined
//   var a = 10;
// }
// a();
// function b() {
//   console.log(a, "let"); // cannot access before initialization
//   let a = 10;
// }
// b();

// const uer = { name: "honey", id: 10 };
// const ue2 = { name: "honey", id: 10 };
// console.log(uer === ue2); //false
