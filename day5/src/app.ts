abstract class Department {
  // id: string;
  // name: string;
  private employees: string[] = [];
  constructor(protected readonly id: string, public name: string) { // readonly property should only be initialised once and can not be overwritten
    // this.id = id;
    // this.name = name;
  }
  static fiscalYear = 2020;
  static createEmployee(name: string) {
    return { name: name };
    return { name: name };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value')
    }
    this.addReport(value)
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }
  describe() {
    console.log(`Hello from ${this.name} department, ID: ${this.id}`)
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

}

class HRDepartment extends Department {
  constructor(id: string, public reqruiters: string[], private hires: string[]) {
    super(id, 'HR');
    this.reqruiters = reqruiters;
  }
  describe() {
    console.log(`Hello from ${this.name} department, ID: ${this.id}`)
  }
  addCandidate(text: string) {
    this.hires.push(text)
  }
  printHires() {
    console.log(hrDepartment.hires);
  }
 }

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log(`Hello from ${this.name} department, ID: ${this.id}`)
  }
  addCandidate(text: string) {
    this.admins.push(text)
  }
}



const employee1 = Department.createEmployee('Lia');
console.log('Employee', employee1, Department.fiscalYear)

const hrDepartment = new HRDepartment('123', ['Lia', 'Aaron'], []);
hrDepartment.addCandidate('Delia');
hrDepartment.printHires();

const itDepartment = new ITDepartment('1', []);
// itDepartment.employees[1] = 'Andrew'; // this will through compilation error because employees mutation is not allowed
itDepartment.addEmployee('Andrew');
itDepartment.printEmployeesInformation();

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log({accounting, accounting2})
accounting.mostRecentReport = '';
console.log(accounting.mostRecentReport)