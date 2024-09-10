// hosted()
// notHosted() error
function hosted() {
  console.log("Hosting ...");
}

const notHosted = () => {
  console.log("only run when complier reaches to this line");
};

function normal() {
  return 10;
  return 20;
}
const resultNormal = normal();
// but it only returns 10 results

// to return both we need generator

// es6 feature
// generators can pause the execution once and multiple times and resume whenever needed
function* generator() {
  yield 10;
  yield 20;
}
const result = generator();
// we have to make instance for generator function
console.log(result.next());
console.log(result.next());
console.log(result.next()); // done flag will be true if there is no yield function call and value will return undefined
