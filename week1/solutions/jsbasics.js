// You can work here or download the template!
const temperature = 2;

if (temperature < 15) {
  console.log('Its cold wear a coat');
  // } else if(temperature >=15 || temp <26)
} else if (temperature <= 25) {
  console.log('Its a bit cold, ware a sweater');
} else {
  console.log('Its warm wear a t-shirt');
}

switch (temperature) {
  case 10:
    console.log('Its cold wear a coat');
    break;
  case 20:
    console.log('Its a bit cold, ware a sweater');
    break;
  case 30:
    console.log('Its warm wear a t-shirt');
    break;
  default:
    console.log();
}

const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra'];
/**
 * Use a while loop to count animals whose names have five or more letters.
 */
let count = 0;
for (let index = 0; index < animals.length; index++) {
  count++;
}

console.log('COUNT', count);

/*
Use a while loop to count animals whose names have five or more letters. You can check the length of a string 
*/
let count2 = 0;
let index = 0;
while (index < animals.length) {
  console.log('Index', index, animals[index], animals[index].length);
  if (animals[index].length > 4) {
    count2++;
  }
  index++;
}
console.log(count2);
/**
 * Use a do...while loop to count animals until you encounter an animal whose name starts with 'm'
 */
let i = 0;
let count3 = 0;
do {
  let animal = animals[i];
  console.log(animal[0].toLowerCase());
  if (animal[0].toLowerCase() === 'm') {
    break;
  }
  count3++;
  i++;
} while (i < animals.length);
console.log(count3);
// another way to do it
let ii = 0;
let count4 = 0;
do {
  count4++;
  ii++;
} while (ii < animals.length && animals[ii][0].toLowerCase() !== 'm');
console.log(count4);

/**
Part 1: Function Declarations
Declare a function with no parameters that outputs something to the console.
Declare a function named greet that logs "Hello, World!" to the console.
Call the function.
*/
function greet() {
  console.log('Hello');
}
greet();
/*


Declare a function with one parameter that returns something.
Declare a function named square that takes a number as a parameter and returns its square.
Call the function with the argument 5, store the result in a variable, and output it to the console.
*/
function greet2(name) {
  return `hello ${name}`;
}
console.log(greet2('john'));
function square(a) {
  return a * a;
}
console.log(square(5));
/*
Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly.

Declare a function named getDayName that takes a number (0-6) as a parameter and returns the name of the day.
Use a switch statement to determine the day name.
Call the function with the argument 3, store the result in a variable, and output it to the console.
 */

function getDayName(dayNumber) {
  let dayName = '';
  switch (dayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number';
      break;
  }
  return dayName;
}
const dayNameResult = getDayName(3);
console.log(dayNameResult);

/**
 * 
Part 2: Function Expressions
Repeat the above steps using function expressions assigned to variables.
Rewrite the greet function as a function expression assigned to a variable named greetExpression.
Rewrite the square function as a function expression assigned to a variable named squareExpression.
Rewrite the getDayName function as a function expression assigned to a variable named getDayNameExpression.
Discussion:
Discuss the difference between function declarations and function expressions. 
 */
function greet() {
  console.log('Hello');
}
greet();
/*


Declare a function with one parameter that returns something.
Declare a function named square that takes a number as a parameter and returns its square.
Call the function with the argument 5, store the result in a variable, and output it to the console.
*/
const greetFunction = function (name) {
  return `hello ${name}`;
};
console.log(greetFunction('john'));
const squareFunction = function (a) {
  return a * a;
};
console.log(squareFunction(5));

const getDayNameFunction = function (dayNumber) {
  let dayName = '';
  switch (dayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number';
      break;
  }
  return dayName;
};
const dayNameResult = getDayNameFunction(3);
console.log(dayNameResult);
