var name = "some";
function dummy() {
  console.log(name); // undefined
  var name = "none";
  console.log(name);
}
// =========

const person1 = {
  name: "John",
  age: 30,
  members: { father: "David", mother: "Ellie" },
};
const person2 = person1; //shallow copy
const person3 = { ...person1 }; // deep copy
person2.name = "Jane";
person3.members.father = "Ronnie";
person3.name = "Sam";
console.log(person1.name);
console.log(person1.members.father);
console.log(person2.members.father);
console.log(person3.name);
