//forEach method
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});

const fruits: string[] = ['apple', 'banana', 'cherry']; 
fruits.forEach((fruit) => {
    console.log(fruit);
});

const sumNumbers = (nums: number[]): number => {
    let sum: number = 0;
    nums.forEach((num) => {
        sum += num;
    });
    return sum;
};

const total: number = sumNumbers(numbers);
console.log(`Total sum: ${total}`);

interface User {
    id: number;
    name: string;
    isActive: boolean;
}

const users: User[] = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true },
    { id: 4, name: "Diana", isActive: false },
]

let activeIds: number[] = [];

users.forEach((user) => {
    if (user.isActive) {
        activeIds.push(user.id);
    }
});
console.log(`Active User IDs: `, activeIds);


export {};