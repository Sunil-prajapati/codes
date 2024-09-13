// Polyfill: A piece of code used to add modern JavaScript features to older browsers that don’t support them.
// Why: They allow modern JavaScript features (like ES6+ syntax and Web APIs) to be used in older browsers or environments.
// How: Polyfills can be implemented manually, via libraries like core-js, or via services like polyfill.io.

let car = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

// ============ ===== custom call =======

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("First argument must be a function");
  }
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(car, "₹", 300000);

// ==================== custom Apply =============================

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("First argument must be a function");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Second argument must be an array");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car, ["₹", 300000]);

// ============ custom bind =========`
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("First argument must be a function");
  }

  context.fn = this;
  return function (...innerArgs) {
    return context.fn(...args, ...innerArgs);
  };
};

const boundCar = purchaseCar.myBind(car);
console.log(boundCar("₹", 300000));
