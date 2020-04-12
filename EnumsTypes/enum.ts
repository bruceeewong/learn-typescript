// Numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Right);
console.log(Direction[2]);
console.log(typeof Direction[2]);

// String enums
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = " RIGHT",
}

console.log(Direction2.Right);
console.log(Direction2[2]);
console.log(Direction2["RIGHT"]);

// keyof
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is: ", key);
    console.log("Log level value is: ", num);
    console.log("Log level message is: ", message);
  }
}
printImportant("ERROR", "This is a message");

// Reverse mappings
enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

// Ambient enums
// used to describe the shape of already existing enum types.
declare enum Enum2 {
  A = 1,
  B,
  C = 2,
}
