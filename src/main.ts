/* eslint-disable no-lone-blocks */
/* eslint-disable no-empty */
/* eslint-disable no-console */

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

// 08-04 uzdaviniu sprendimai

console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  const allToUpperCase = (word: string): string => word.toUpperCase();
  console.log(allToUpperCase('sun shine rain'));
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  const lengthOfTwo = (word1: string, word2: string): number => word1.length + word2.length;
  console.log(lengthOfTwo('labas', 'rytas'));
}
console.groupEnd();

console.group('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  const hasLetter = (text: string, letter: string): boolean => text.includes(letter);
  console.log(hasLetter('text', 'x'));
  console.log(hasLetter('text', 'a'));
}
console.groupEnd();

// 10 min
console.group('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const isEvenSymbols = (term: string): boolean => term.length % 2 === 0;
  console.log(isEvenSymbols('sun'));
  console.log(isEvenSymbols('rain'));
}
console.groupEnd();

// 15 min
console.group('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const howManyVowel = (vowelWord: string): number => {
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

// 15 min
console.group('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
  const randomLetterCount = (word5 : string): number[] => {
    const wordLength = word5.length;
    const randomIndex = (max: number, min: number): number => Math.floor(Math.random() * (max - min + 1) + min);
    const randomWordIndex = randomIndex(wordLength, 0);

    const letter = word5.charAt(randomWordIndex);

    let countOfLetter = 0;

    [...word5].forEach((item) => {
      if (item === letter) countOfLetter += 1;
    });

    return [randomWordIndex, countOfLetter];
  };
  console.log('arbitrary [index, count]', randomLetterCount('arbitrary'));
}
console.groupEnd();

// 15 min
console.group('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
  const withoutFirstLetter = (str: string, letter: string): string => str.replace(letter, '');
  console.log('liepa - e', withoutFirstLetter('liepa', 'e'));
}
console.groupEnd();

// 20 min
//  8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
  const removeLettersFromWord = (str: string, letters: string[]): string => letters.reduce((acc, curr) => acc.replaceAll(curr, ''), str);

  console.log('tandem', removeLettersFromWord('tandem', ['t', 'e', 'm']));
}
console.groupEnd();

// 60 min
// 9. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.group('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
  type StringModifierToArr = (str: string) => string[];
  type ArrModifierToString = (strArr: string[]) => string;
  type ArrModifier = (strArr: string[]) => string[];

  const wordArr: StringModifierToArr = str => str.split(' ').filter(item => item.length !== 0);

  const addSpaces: ArrModifier = strArr => strArr.map(word => word.replace('.', '. ')).map(word => word.replace(',', ', '));

  const sentenceCapitalize: ArrModifierToString = strArr => strArr.join('').split('. ').map(item => item[0].toUpperCase() + item.slice(1)).join('. ');

  const correctP = (str: string): string => {
    let tempstr: string = str.trim();
    let tempStrArr: string[];

    tempStrArr = wordArr(tempstr);
    tempStrArr = addSpaces(tempStrArr);
    tempstr = sentenceCapitalize(tempStrArr);
    return tempstr;
  };
  console.log('lorem , ipsum .  dolor,sit.ametito ?! -->', correctP('lorem , ipsum .  dolor,sit.ametito ?! '));
}
console.groupEnd();
