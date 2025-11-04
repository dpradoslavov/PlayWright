class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    introduce(): void {
        console.log(`Hi, my name is  ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person("Dako", 30);
person.introduce();
person.age = 31;
person.introduce();
person.name = "Dako Updated";
person.introduce();

class ReadOnlyPerson {
    readonly name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    intro(): void {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person2 = new ReadOnlyPerson("Pesho", 25);
person2.intro();
// person2.name = "New Name"; 

//Class inheritance

class User {
    name: string;
    constructor(name: string) {
        this.name = name;

    }
    intro(): void {
        console.log(`Nice to meet you.`);
    }
}

class userDetails extends User {

    constructor(name: string) {
        super(name);
    }
    showDetails() {
        console.log(`My name is ${this.name}.`);
    }
}

const user = new userDetails("Gosho");
user.intro();
user.showDetails();

class ProtectedPerson {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
