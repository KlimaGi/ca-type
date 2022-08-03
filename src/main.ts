// import { add } from "./helpers/calc";

const add = (a: number, b: number): number => a + b;

const a: number = 7;
const b: number = 8;

console.log('{a, b}', { a, b });
console.log({
  'add(a, b)': add(a, b),
  'add(3, 10)': add(3, 10),
});

const numbersArr: number[] = [1, 3, 5, 7];
const doubleNumbers = numbersArr.map(x => x * 2);

console.log('doubleNumbers', doubleNumbers);

// 65 - funstion declarations

const double = (num: number): number => num * 2;
console.log('double(2)', double(2));

const doubleNumbers2: number[] = numbersArr.map(double);
console.log('doubleNumbers2', doubleNumbers2);

const replaceSpacesWithDash = (str: string): string => str.replaceAll(' ', '-');
console.log('replaceSpacesWithDash()', replaceSpacesWithDash('labas vakaras'));

const calcAvg = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0) / arr.length;
console.log('calcAvg', calcAvg(numbersArr));

const avg = numbersArr.reduce((acc, curr) => acc + curr) / numbersArr.length;
