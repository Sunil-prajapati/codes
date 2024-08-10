// with call apply bind it will attach with this current function
let fullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + " " + state
  );
};

let name = {
  firstName: "Monky D",
  lastName: "Luffy",
};

// using call method we can do function borrowing
let name2 = {
  firstName: "Roro",
  lastName: "ZORO",
};

// Function borrowing
// NOTE: first argument refer to the this

fullName.call(name2, "Amritsar", "punjab");
fullName.call(name, "jalandher", "punjab");

// only diff bw call and apply method is way to pass the arguments
// in apply we can pass argument in an Array
fullName.apply(name, ["Amritsar", "punjab"]);

// bind method
// it give the copy and it call later rest are same as call
// separate memory location
let printMyName = fullName.bind(name2, "Amritsar", "punjab");
// console.log(printMyName)
printMyName(); // we can also pass value from here
