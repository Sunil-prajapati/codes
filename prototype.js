// ===========prototype inheritance =========
// In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from other objects
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

// ===== example =====
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Alice and I am 25 years old.
