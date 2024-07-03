console.log('Hello node', process.argv.slice(2));
const argv = process.argv.slice(2);
console.log(argv[0].split('=')[1]);
