// You can work here or download the template!
const array = [2, 4, 6, 8, 10, 12, 14, 16];
// Extract different portions of the array and print the results

const newArr = array;

newArr[0] = 99;
let x = 8;
let y = x;
y = 4;
console.log(x);
console.log(newArr);
console.log('Original Array', array);

const copyArr = array.slice();
const copyArr2 = [...array];
copyArr2[0] = 6;
copyArr[0] = 4;
console.log(copyArr);
console.log(array);
