function identity(args: number): number {
  return args;
}

// need a way of capturing the type of the argument
function identity2<T>(args: T): T {
  return args;
}

let output = identity2<string>("myString");
let output2 = identity2("myString"); // or compiler auto set T for us
