const greeting = require('./message');

const { multiply, divide } = require('./calculator');

greeting();

console.log('Multiplication of 5 and 3:', multiply(5, 3));
console.log('Division of 10 by 2:', divide(10, 2));