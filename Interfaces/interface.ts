// First Interface
// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }

// let myObj = { size: 10, label: "size 10 object" };
// printLabel(myObj);

// That is:
interface LabeledValue {
  label: string;
}
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

// Readonly
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 2; // Error

// Readonly Array
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[2] = 1; // Error
// ro.push(2); // Error
// ro.length = 100; // Error
// a = ro; // Error

// avoid excess properties check
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
  return { color: config.color || "red", area: config.width || 20 };
}

let mySquare1 = createSquare2({ colour: "red", width: 100 });
let mySquare2 = createSquare2({ colour: 200 });

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
let mySearch2: SearchFunc = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
};

mySearch2("aaaabbbccc", "bb");
// mySearch2('aaaabbbccc', 2); // Error

// Indexable Types
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["amy", "bob"];
let myStr: string = myArray[0];
