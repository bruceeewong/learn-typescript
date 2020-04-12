class Animal2 {
  // #name: string;
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

// new Animal2("cat").#name; // Error

// Protected
class Person {
  protected name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getEvelatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getEvelatorPitch());
// console.log(howard.name); // Error

// Parameter properties
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}

const otp = new Octopus("Yo");

// getter & setter
const fullNameMaxLength = 10;

class Boss {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error(`fullName has a max length of ${fullNameMaxLength}`);
    }
    this._fullName = newName;
  }
}

let boss = new Boss();
boss.fullName = "Bob Smith";
boss.fullName = "Bob Smith aaaaaaaaaaaa";
if (boss.fullName) {
  console.log(boss.fullName);
}
boss.fullName = "Bob Smith aaaaaaaaaaaa";
