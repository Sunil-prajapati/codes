// A function take one argument at a time and return new function expecting the next argument
// we can initialize it once and give the value to variable in that we way we can use multiple times

// currying with bind method
const sum = function (a, b) {
  //   console.log(a + b, "with bind");
};

const addByTwo = sum.bind(this, 3);
addByTwo(3);

// currying with closures
const sumClosures = function (a) {
  return function (b) {
    return function (c) {
      // console.log(a + b + c, "closures");
    };
    console.log(a + b);
  };
};

// way to call
1;
const result = sumClosures(2);
result(3);

// 2.
sumClosures(2)(8)(3);

// ===== task =====

//1. infinite currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

// console.log(add(1)(2)(3)()), "infinite";

// == partial application ===
function partial(a) {
  return function (b, c) {
    return a + b + c;
  };
}
// console.log(partial(1)(2, 4), "partial");

// ========= curry implementation ===

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...innerArgs) {
        return curriedFunc(...args, ...innerArgs);
      };
    }
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

// console.log(curriedJoin(1, 2, 3));
// console.log(curriedJoin(1)(2, 3));
