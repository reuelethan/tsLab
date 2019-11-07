interface Mountain {
  name: string;
  height: number;
}
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali ", height: 20310 }
];
function findNameOfTallestMountain(mountains: Mountain[]): string {
  let currentTallestHieght: number = 0;
  let tallestMountainName: string = "";
  mountains.forEach(mountain => {
    if (mountain.height > currentTallestHieght) {
      currentTallestHieght = mountain.height;
      tallestMountainName = mountain.name;
    }
  });
  return tallestMountainName;
}

let nameOfTallestMountain = findNameOfTallestMountain(mountains);

console.log(nameOfTallestMountain);
//   for (let i = 0; i < mountains.length; i++) {
//    if (condition = tallestPeak ) {
//     return   //if the height of the mountain is greater than 25000 then .log the name of the mountain
//    }
// }
/*
PRODUCTS
● Declare an interface called Product that contains the following properties:
○ name - string
○ price - number
● Declare an array called products which is an array of type Product.
● Fill the array with a few products of your own choosing.
● Declare a function called calcAverageProductPrice. It takes one parameter, an array
of Product objects. It returns a number, the average price of all the products provided
as an argument.
● Call calcAverageProductPrice, passing it your products array as an argument.
● Store the result of the function call (the return value) in a variable and then console.log
the variable.
*/

// var myArray = [
//   {
//     name: "first",
//     price: 34
//   },
//   {
//     name: "second",
//     price: 44
//   },
//   {
//     name: "third",
//     price: 64
//   }
// ];
// // average is 47.333

// // function calcAverageProductPrice(products) {
//   let theSum = 0;
//   for (let i = 0; i < products.length; i++){
//     theSum += products[i].price
//   }
//   return theSum / products.length;
// }

// interface Product {
//   name: string;
//   price: number;
// }
// let product: Product[] = [
//   { name: "juice", price: 10 },
//   { name: "gum", price: 2 },
//   { name: "car ", price: 20310 }
// ];
// let sum = 0;
// function calcAverageProductPrice(products: Product[]):number {
// for (let i = 0; i < products.length; i++) {
//    sum += products[i].price;
//   }
//   return sum/products.length;
// }

// calcAverageProductPrice(product);

interface Product {
  name: string;
  price: number;
}
let product: Product[] = [
  { name: "juice", price: 10 },
  { name: "gum", price: 2 },
  { name: "car ", price: 20310 }
];
let sum: number = 0;
function calcAverageProductPrice(products: Product[]): number {
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}

calcAverageProductPrice(product);

interface InventoryItem {
  name: string;
  price: number;
  quantity: number;
}
let inventory: InventoryItem[] = [
  { name: "motor", price: 10.0, quantity: 10 },
  { name: "sensor", price: 12.5, quantity: 4 },
  { name: "LED", price: 1.0, quantity: 20 }
];

let totalvalue = 0;
function calcInventory(inventory: InventoryItem[]): void {
  for (let i = 0; i < inventory.length; i++) {
    totalvalue += inventory[i].price * inventory[i].quantity;
  }
  console.log(calcInventory(inventory));
}
