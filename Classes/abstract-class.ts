// Abstract class may not be instantiated directly.
// Unlike an interface, an abstract class may
// contain implementation details for its members.
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void; // must be implemented in derived class
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }
  printMeeting() {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

// Since we declared department as Department type.
let department: Department;
// department = new Department(); // Error
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); // method doesn't exits on Department type
