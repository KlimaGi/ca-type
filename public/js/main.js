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
console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
    const allToUpperCase = (word) => word.toUpperCase();
    console.log(allToUpperCase('sun shine rain'));
}
console.groupEnd();
console.group('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
    const lengthOfTwo = (word1, word2) => word1.length + word2.length;
    console.log(lengthOfTwo('labas', 'rytas'));
}
console.groupEnd();
console.group('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
    const hasLetter = (text, letter) => text.includes(letter);
    console.log(hasLetter('text', 'x'));
    console.log(hasLetter('text', 'a'));
}
console.groupEnd();
console.group('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const isEvenSymbols = (term) => term.length % 2 === 0;
    console.log(isEvenSymbols('sun'));
    console.log(isEvenSymbols('rain'));
}
console.groupEnd();
console.group('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
    const howManyVowel = (vowelWord) => {
        const vowels = ['a', 'e', 'i', 'y', 'o', 'u'];
        let count = 0;
        for (const char of vowelWord) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    };
    console.log('labasa', howManyVowel('labasa'));
}
console.groupEnd();
console.group('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const randomLetterCount = (word5) => {
        const wordLength = word5.length;
        const randomIndex = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
        const randomWordIndex = randomIndex(wordLength, 0);
        const letter = word5.charAt(randomWordIndex);
        const letterArr = word5.split('');
        let countOfLetter = 0;
        letterArr.forEach((item) => {
            if (item === letter)
                countOfLetter += 1;
        });
        return [randomWordIndex, countOfLetter];
    };
    console.log('arbitrary [index, count]', randomLetterCount('arbitrary'));
}
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map