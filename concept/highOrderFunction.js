// A function that takes one or multiple functions as parameters or returns a function is a high-order function.

function operation(fun) {
  return fun(2, 3); // vapas jati hai value
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
console.log(operation(add));
console.log(operation(sub));
// ================================================================

function brew(coffeeMaker, coffeeType) {
  return coffeeMaker(coffeeType); //vapas jati hai value
}

function makeAmericano(coffeeAmount) {
  return `Brewing ${coffeeAmount} ml of Americano...`;
}

function makeLatte(coffeeAmount) {
  return `Steaming ${coffeeAmount} ml of milk for Latte...`;
}

const result1 = brew(makeAmericano, 200);
const result2 = brew(makeLatte, 300);
console.log(result1, result2);
