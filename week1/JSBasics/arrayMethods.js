// You can work here or download the template!
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((n, i) => console.log('index ', i, ' number ', n));
numbers.forEach((n, i) => (sum += n));
console.log(sum);
const squaredNumbers = [];
numbers.forEach(n => squaredNumbers.push(n * n));
console.log(squaredNumbers);
const result = numbers.map(n => (n % 2 === 0 ? n * n : n));
console.log(result);
// Array.prototype.myFor = function(cb) {
//     for (let i = 0; i < this.length; i++){
//         cb(this[i],i)
//     }
// }

Array.prototype.myFor = function (cb) {
  console.log('THIS', this);
  //   for (let i = 0; i < this.length; i++) {
  //     cb(this[i], i);
  //   }
};
numbers.myFor.bind(numbers);
numbers.myFor.call(numbers, n => console.log(n));

const strings = ['a', 'b', 'c'];
// strings.myFor((s)=>console.log(s))

const strings2 = numbers.map(n => {
  return `Number: ${n}`;
});
console.log(strings2);

const numberObjects = numbers.map(n => {
  return {
    originalNumber: n,
    squared: n * n,
  };
});
console.log(numberObjects);

console.log(numbers.find(n => n > 25));

console.log(people.find(person => person.name === 'Charlie'));
const newArray = people.filter(person => person.grade > 80);
console.log(numbers.some(n => n > 20));
console.log(numbers.every(n => n % 2 == 0));

console.log(people.some(student => student.passed));
console.log(people.every(student => student.age > 18));
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];
const ages = people.reduce((acc, person) => {
  acc += person.age;
  console.log('ACC', acc, 'person', person);
  return acc;
}, 0);
console.log(ages);

const names = people.reduce((acc, person) => {
  acc.push(person.name);
  return acc;
}, []);
console.log(names);
