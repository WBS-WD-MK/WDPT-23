// Variables
// bad practice dont use var!!
console.log(newStudent);
var newStudent = '3safadsf';
//ES6
// console.log(userName); ===> ReferenceError: userName is not defined

let userName = 'John';
console.log(userName);
userName = 'new userName';
console.log(userName);
console.log(typeof userName);
const age = 19;
const avg = 96.4;
const isStudent = true;
// avg = 44;  ===> TypeError: Assignment to constant variable.
console.log(typeof age);
console.log(typeof avg);
console.log(typeof isStudent);
let x;
console.log(x);

// conditionals

if (age > 18) {
  // 10 > 18 ===> false
  console.log(' you can drive!!');
} else {
  console.log('You can walk!!');
}

const color = 'sfddsf';
// == ===
// "10" == 10 ===> true
// "10" === 10 ===> false
if (color === 'blue') {
  console.log('Blue is good');
} else if (color === 'red') {
  console.log('Red is the best');
} else {
  // ''  "" ``
  console.log(`${color} is also good!!`);
  // console.log(color + 'is the best of the best');
}

// switch
switch (color) {
  case 'red':
    console.log('Red is the best');
    break;
  case 'blue':
    console.log('Blue is good');
    break;
  default:
    console.log(`${color} is also good!!`);
    break;
}
let y = 10;
console.log(y);
y = y + 1;
console.log(y);
y++;
console.log(y);
y += 2;
console.log(y);
// loops

for (let num = 0; num < 10; num++) {
  // num =0 | 0<10 =>true
  // ....
  // num = 10 | 10<10 =>false
  console.log(num);
}

let numberOfStudents = 30;
while (numberOfStudents > 0) {
  console.log(numberOfStudents);
  numberOfStudents -= 5;
}
const numStr = 'sfsdf';
console.log(Number(numStr));
console.log(isNaN(Number(numStr)));
console.log(this);
