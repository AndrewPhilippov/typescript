class Department {
  // id: string;
  // name: string;
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) { // readonly property should only be initialised once and can not be overwritten
    // this.id = id;
    // this.name = name;
  }
  describe(this: Department) {
    console.log(`Department: id: ${this.id}, ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class HRDepartment extends Department {
  constructor(id: string, public reqruiters: string[], private hires: string[]) {
    super(id, 'HR');
    this.reqruiters = reqruiters;
  }
  addCandidate(text: string) {
    this.hires.push(text)
  }
  printHires() {
    console.log(hrDepartment.hires);
  }
 }

const hrDepartment = new HRDepartment('123', ['Lia', 'Aaron'], []);
hrDepartment.addCandidate('Deliya');
hrDepartment.printHires();

const itDepartment = new Department('1', 'IT');
// itDepartment.employees[1] = 'Andrew'; // this will through compilation error because employees mutation is not allowed
itDepartment.addEmployee('Andrew');
itDepartment.printEmployeesInformation();