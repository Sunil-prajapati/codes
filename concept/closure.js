// A function which is bind with it's lexical scope

// function parent() {
//   var a = 10;
//   var name = "sunil";
//   function some() {
//     return "function return";
//   }
//   function child() {
//     console.log(a);
//     console.log(name);
//     console.log(some());
//   }
//   child();
// }
// parent();

// ================================

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y; //when we return y it will also return closuer
// }
// const z = x();
// z();

// // ================================================================
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   var a = 100;
//   return y;
// }
// var w = x();
// w();

// ===============================================================
// function createCaffeineAddict(coffeeType) {
//   const addiction = `addicted to ${coffeeType}`;
//   return function getHigh() {
//     const highMessage = `Feeling wired and ${addiction}!`;
//     console.log(highMessage);
//   };
// }
// const espressoJunkie = createCaffeineAddict("espresso");
// espressoJunkie();

// when we should closure =================================================================

// 1.Data Privacy and Encapsulation

// 2. Callbacks and Asynchronous Code ================ Real world example ============
// function fetchData(url) {
//   const data = "Important Data";

//   setTimeout(function () {
//     console.log(`Fetched data from ${url}: ${data}`);
//   }, 2000);
// }

// fetchData("https://api.example.com");

// 3.  Factory Functions (Creating Dynamic Functions)
function greetings(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}
const hello = greetings("hello");
const hi = greetings("hi");
hello("sohan");
hi("rohan");
