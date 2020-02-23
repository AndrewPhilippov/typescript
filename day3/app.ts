// const person: {
//   name: string;
//   age: number;
// } = {


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN , READ_ONLY, AUTHOR};

const person = {
  name: 'Andrew',
  age: 33,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.AUTHOR) {
  console.log('Is author')
}
// person.role.push('admin');
// person.role[1] = 10; // !!! ERR
// person.role = [0, 'admin', 'theceo']; // !!! ERR

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()); // !!! ERROR !!!
}
