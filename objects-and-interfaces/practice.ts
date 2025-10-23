//object declaration
const car = {
    type: "Fiat",
    model: "500",
    color: "white",
    horsePower: 100,
}

const person = {
    name: "Ivan",
    lastName: "Ivanov",
    adress: "Mars",
    age: 33,
    hobies: ["football", "tenis", "cars"],
    greeting: function() {
       return "Hello! My Name is Ivan!";
    } 
}

console.log(person.greeting());
console.log(person.hobies);

person.age = 34;
console.log(person.age);

let dog = { name: "Bendji" };
dog.name = "Bendji2";
dog = { name: "Bendji3" };

const mouse: {name: string, favFood: string, age: number} = {
    name: "Jerry",
    favFood: "cheese",
    age: 2
}

interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

const myCar: Car = {
    type: "Fiat",
    model: "500",
    color: "white",
    horsePower: 330,
}

interface Person {
    name: string;
    lastName: string;
    adress: string;
    age: number;
    hobies: string[];
    greeting: () => string;
}

interface User {
    username: string;
    email: string;
    role: string;
    job?: string;
}

const user: User = {
    username: "ivan123",
    email: "sss",
    role: "admin",
}

interface UserPermissions extends User {
    permissions: string;
}

const thirtdSser: UserPermissions = {
    username: "ivan123",
    email: "sss",
    role: "admin",
    job: "developer",
    permissions: "all"
}
