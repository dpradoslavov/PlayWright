// arrays declaration
let listFromNumbers: number[] = [1, 2, 3];
let listFromText: string[] = ["one", "two", "three"];
let mixedList: (string | number)[] = [1, "two", 3, "four"];

// acces elements by index
listFromNumbers[0];
listFromText[1];
mixedList[2];

// console.log(listFromNumbers[0]);

// method map
listFromNumbers.map((num) => num * 2);
let mapNames = listFromText.map((currName: string) => `Numer: ${currName}`);
let checkType = mixedList.map((element:number | string) => {
    if (typeof element === "number") {
        return element * 2;
    } else {
        return `String: ${element}`;
    }
});

// console.log(mapNames);
// console.log(checkType);

let positiveNumbers: number[] = [1, 2, 3, 4, 5];
let filteredArr: number[] = positiveNumbers.filter((num) => num > 2);
// console.log(filteredArr);

//sort method
let unsortedArr: number[] = [5, 3, 8, 1, 4, 10, 100, 30];
console.log(unsortedArr.sort());
let sortedArr: number[] = unsortedArr.sort((a, b) => a - b);
console.log(sortedArr);
