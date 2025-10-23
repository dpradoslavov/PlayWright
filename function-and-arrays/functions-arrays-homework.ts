let numbers: number[] = [69, 2, 6, 4, 5, 22, 66];
let fruits: string[] = ['apple', 'banana', 'cherry', 'elderberry'];


// 1. Create an array of strings and add a new element at the end
// of the array. Log the result.
fruits.push("orange");
console.log(fruits);

// 2. Create an array of numbers and remove the first element from
// the array. Log the result.

numbers.shift();
console.log(numbers);

// 3. Use the map method to create a new array and divide each
// number by 2 “num / 2” from [1, 2, 3, 4, 5]. Log the
// result.

let dividedNumbers: number[] = numbers.map(num => num / 2);
console.log(dividedNumbers);

// 4. Use the filter method to create a new array containing only
// numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the
// result.

let filteredNumbers: number[] = numbers.filter(num => num > 5);
console.log(filteredNumbers);

// 5. Use the sort method to sort an array of numbers [9, 3, 7,
// 2, 8, 5] in ascending order. Log the result.

let numbersForSort: number[] = [9, 3, 7, 2, 8, 5];
numbersForSort.sort((a, b) => a - b);
console.log(numbersForSort);

// Use the slice method to extract the first three elements from
// ['apple', 'banana', 'cherry', 'date',
// 'elderberry']. Log the result.

let slicedFruits: string[] = fruits.slice(0, 3);
console.log(slicedFruits);

// Use the splice method to remove the second and third
// elements from ['car', 'bike', 'bus', 'train',
// 'boat'] . Log the result.

let vehicles: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
vehicles.splice(1, 2);

console.log(vehicles);

// Write a function named “findLargest” that takes three
// numbers as parameters and returns the largest of them. Use
// if/else statement to find the largest number. Log the result.

const findLargestNumber = (a: number, b: number, c: number): number => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

console.log(findLargestNumber(6, 1, 99));

// Write a function “convertToCentimeters” which receives
// parameter “inches” and add default value it and convert to
// centimeters. Log the result with default parameter and with
// passed parameter.
const convertToCentimeters = (inches: number = 10): number => inches * 2.54;


console.log(convertToCentimeters());
console.log(convertToCentimeters(25));

// .Write a function named “calculateArea” that takes a
// required width parameter and an optional height
// parameter. If height is not provided, assume the shape is a
// square.
const calculateArea = (width: number, height?: number): number =>
  height === undefined ? width * width : width * height;

console.log(calculateArea(5));
console.log(calculateArea(5, 10));