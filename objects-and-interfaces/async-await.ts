// console.log("Start");

// setTimeout(() => {
//     console.log("Async");
// }, 1000);

// console.log("End");

// function setTimeout2() {
//     setTimeout(() => {
//         console.log("first timeout"); 
// }, 500);

//     setTimeout(() => {
//         console.log("second timeout");
//     }, 400);

// setTimeout(() => {
//     console.log("third timeout");
// }, 200);
// }


// setTimeout2();

// async function fetchData(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data fetched");
//         }, 1000);
//     });
// }
// async function processData() {
//     console.log("Fetching data...");
//     const data = await fetchData();
//     console.log(data);
//     console.log("Data processing complete.");
// }
// processData();

// async function demo() {
//     await delay(1000);
//     console.log("1 second");

//     await delay(2000);
//     console.log("2 seconds");

//     await delay(3000);
//     console.log("3 seconds");
// }

// demo();



function delay(arg0: number) {
    throw new Error("Function not implemented.");
}

interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

async function getData() {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const data: Product = await response.json();
    // console.log("response", data);
}

try {
    getData();
    console.log("Fetch initiated");
} catch (error) {
    console.error("Error fetching data:", error);
}





