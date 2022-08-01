// import { add } from "./helpers/calc";

const add = (a: number, b: number): number => a + b;

const a: number = 7;
const b: number = 8;

console.log("{a, b}", { a, b });
console.log({
  "add(a, b)": add(a, b),
  "add(3, 10)": add(3, 10),
});

const firstName: string = "Bea";
const age: number = 29;
const numbers: number[] = [2, 15, 76, 45, 2, 5, 91];

type Thing = {
  name: string;
  price: number;
};

const thing1: Thing = {
  name: "Book",
  price: 51,
};

const things: Thing[] = [
  { name: "Book1", price: 51 },
  { name: "Book2", price: 32 },
  { name: "Book3", price: 40 },
];

type Person = {
  name: string;
  age: number;
};

const friend1: Person = {
  name: "Oscar",
  age: "32",
};

const friends: Person[] = [
  { name: "Zari", age: "27" },
  { name: "Edy", age: "33" },
  { name: "Vili", age: "63" },
];

const title: string = "Vermontas";
const subTitle: string = "Kavinė - Baras";
const peopleCount: number = 5;
const maxPeopleCount: number = 26;
const isOpen: boolean = true;
const openTime: string = "12:00";
const closeTime: string = "02:00";
const security: null = null;
