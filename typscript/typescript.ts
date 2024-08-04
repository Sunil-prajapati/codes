// typescript is all about type Safty
// static checking
// there is no int and float type in  typescript because eventually it is number
// sometimes we don't need to write type because it is obvious

let greetings: string = "Hello world!";
let myNum: number = 6;
let isLoggedIn: boolean = false;
console.log(greetings, myNum, isLoggedIn);

//any
let hero: string;

function getHero() {
  return "Thor";
}

hero = getHero();

//function
// function addTwo(num:number){
//     return num + 2;
// }
// addTwo(5)

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("Four");

function signup(name: string, email: string, isPaid: boolean = false) {}

signup("John Doe", "sun");

// advance function

function addTwo(num: number): number {
  return num + 3;
}
addTwo(5);

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 ok";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(error: string): void {
  console.error(error);
}

function handleError(error: string): never {
  // never we use in case of exception error
  throw new Error(error);
}

export {};
