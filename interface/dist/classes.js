"use strict";
class Person {
    constructor(age, n) {
        this.age = age;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} I am ${this.name}`);
        }
        console.log(`${phrase}, I am Mr. John Doe`);
    }
}
let user1;
user1 = new Person(33);
user1.greet('Hello there');
console.log(user1);
//# sourceMappingURL=classes.js.map