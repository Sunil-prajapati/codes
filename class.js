class CreateUser {
  #age; //private properties
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.#age = age;
  }
  #hi = "Hello world"; //constant without # public
  getBirthYear() {
    return new Date().getFullYear() - this.#age;
  }
  static hello = "static hello";
  getFull() {
    this.#hi;
    return this.name + " " + this.city;
  }

  static {
    console.log("static block");
    this.hi;
  }
}
const user1 = new CreateUser("sunil", "amritsar", 29);
const user2 = new CreateUser("name ", "punjab", 19);
console.log(user1);
