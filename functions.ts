//functions
function displayPersonalData(name: string, age: number): string {
    return `Name: ${name}, Age: ${age}`;
}

const personName: string = "Dako";
const personAge: number = 25;

console.log(displayPersonalData(personName, personAge));

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}
// console.log(multiply(5, 6));
// console.log(multiply(5.5, 6.3));

function devide(num1: number, num2: number): number {
    return num1 / num2;
}

// console.log(devide(10, 2));
// console.log(devide(10.5, 2.5));

//arrow functions
const sumNums = (num1: number, num2: number) => num1 + num2;
console.log(sumNums(10, 20));
console.log(sumNums(10.5, 20.3));

//optional parameters
const introduce = (name: string, age?: number) => {
    if (age) {
        return `Hello! I am ${name}, ${age} years old`;
    } else {
        return `Hello! I am ${name}`;
    }
};
// console.log(introduce("Dako", 25));
// console.log(introduce("Dako"));

//default parameters
function subtractNums(num1: number, num2: number = 10): number {
    return num1 - num2;
}

// console.log(subtractNums(20, 5));
// console.log(subtractNums(20));
