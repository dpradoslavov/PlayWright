const introduce = (name: string, age: number): void => {
  console.log(`Hello! I am ${name}, ${age} years old`);
};

introduce("Dani Dani", 20);

const num1: number = 66;
const num2: number = 99;

const addition: number = num1 + num2;
const subtraction: number = num1 - num2;

console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);


const isWithinRange: boolean = num1 >= 10 && num1 <= 50;

console.log(`The number ${num1} is witin range (10-50): ${isWithinRange}`);
