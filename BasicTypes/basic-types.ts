// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = 'blue';

// Array
let list: number[] = [1, 2 ,3];
let list2: Array<number> = [2, 3, 4];

// Tuple
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']; // Error
// console.log(x[3].toString()) // Error
// console.log(x[1].substring(1)) // Error

// Enum
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
console.log(c) // 2
let colorName: string = Color[2];
console.log(colorName); // Green

// Any
let notSure: any = 4;
notSure = 'maybe a string instead';

// Object
declare function create(params: object | null): void;

create({});
create(null);
// create('ssss')  // Erro

// Type Assertions
let someValue: any = 'a string';
let strLength: number = (<string>someValue).length;
strLength = (someValue as string).length;