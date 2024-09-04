// type and order both matters

// const user: (string | number)[] = [1, "sunil"];

let tUser: [string, number, boolean];

tUser = ["sunil", 1, true];

// example
let rgb: [number, number, number] = [234, 456, 345];

type user = [number, string];

const tUser1: user = [123, "sunil"];
tUser1[1] = "sunil"; // can change
// tUser1.push(true) //updated when i were learning
