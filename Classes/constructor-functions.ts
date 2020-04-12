// First way to set constructor
class Greeter4 {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }
}

let greeter4: Greeter4;
greeter4 = new Greeter4("world");
console.log(greeter4.greet());

// Second way
let Greeter5 = (function () {
  function Greeter5(message) {
    this.greeting = message;
  }
  Greeter5.prototype.greet = function () {
    return `Hello, ${this.greeting}`;
  };
  return Greeter5;
})();

let greeter5;
greeter5 = new Greeter5("world");
console.log(greeter5.greet());

// Third way
class Greeter6 {
  static standardGreeting = "Hello";
  greeting: string;
  greet() {
    if (this.greeting) {
      return `Hello, ${this.greeting}`;
    } else {
      return Greeter6.standardGreeting;
    }
  }
}

let greeter6: Greeter6;
greeter6 = new Greeter6();
console.log(greeter6.greet());

let greetMaker: typeof Greeter6 = Greeter6;
greetMaker.standardGreeting = "Hello there!";
let greeter7: Greeter6;
greeter7 = new Greeter6();
console.log(greeter7.greet());
