class Person implements Greetable {
  name?: string;
  age: number;

  constructor(age: number, n?: string) {
    this.age = age;
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} I am ${this.name}`)
    }
    console.log(`${phrase}, I am Mr. John Doe`)
  }
}

let user1: Greetable;

user1 = new Person(33);
user1.greet('Hello there');
console.log(user1);
