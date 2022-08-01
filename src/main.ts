//import { add } from "./helpers/calc";

const add = (a: number, b: number): number => a + b;

let a: number = 7;
let b: number = 8;

console.log("{a, b}", { a, b });
console.log({
  "add(a, b)": add(a, b),
  "add(3, 10)": add(3, 10),
});
