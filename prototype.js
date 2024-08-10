// ===========prototype inheritance =========
// when ever we create something on javascript it will attach with some by default property. that property attach because of
//   __proto__
// if we create any array or object it will attach with __proto__ because of this we can use push and other methods
const obj = {
  name: "Sunil",
  city: "Amritsar",
  intro: function () {
    console.log(this.name + "from" + this.city);
  },
};

const obj2 = {
  name: "Karna",
};

obj2.__proto__ = obj;

console.log(obj2.city);
console.log(obj.intro); // obj2 has name so it will show it's name but we don't have city in obj2 it will inherit the obj city

// way to create custom proto below
Function.prototype.mybind = function () {
  console.log("proto type");
};

function fun() {}

console.log(fun.__proto__.mybind); // we can use mybind function from by any other function because of prototype
