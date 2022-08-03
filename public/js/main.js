"use strict";
const add = (a, b) => a + b;
const a = 7;
const b = 8;
console.log('{a, b}', { a, b });
console.log({
    'add(a, b)': add(a, b),
    'add(3, 10)': add(3, 10),
});
const numbersArr = [1, 3, 5, 7];
const doubleNumbers = numbersArr.map(x => x * 2);
console.log('doubleNumbers', doubleNumbers);
const double = (num) => num * 2;
console.log('double(2)', double(2));
const doubleNumbers2 = numbersArr.map(double);
console.log('doubleNumbers2', doubleNumbers2);
const replaceSpacesWithDash = (str) => str.replaceAll(' ', '-');
console.log('replaceSpacesWithDash()', replaceSpacesWithDash('labas vakaras'));
const calcAvg = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;
console.log('calcAvg', calcAvg(numbersArr));
const avg = numbersArr.reduce((acc, curr) => acc + curr) / numbersArr.length;
//# sourceMappingURL=main.js.map