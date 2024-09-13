// callback basically for asynchronous operations

function callback(name, age) {
  console.log(`name: ${name}, age: ${age}`);
}

function normal(name, age, callback) {
  // like we are calling api
  setTimeout(() => {
    callback(name, age); // like we pass response of api
  }, 2000);
}
const result = normal("sunil", 26, callback);
console.log(result);
