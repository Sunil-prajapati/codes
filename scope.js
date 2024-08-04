// Scope: where u can access specific a  value or function in our code
// THERE IS ALSO A MODULE SCOPE
// outer variable we can access in any function

// when we use var then it create window scope but in case of let and cost it will be script scope
// function a() {
//   console.log(b);
// }
// const b = 10;
// a();

// =========

function a() {
  function c() {
    console.log(b);
  }
  c();
}
let b = 10;
a();

// ===========

function a() {
  let b = 10;
  function c() {}
  c();
}
a();
console.log(b);
