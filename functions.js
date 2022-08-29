// Function keyword
// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 2));
//   0     1     2    3
// [1000, 4000, 500, 1000]
// Sum total expense
// function sumTotalExpesne(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   return total;
// }
// let expense = [1000, 4000, 500, 1000];
// console.log(sumTotalExpesne(expense));

// Function expression
// const sumTotalExpesneTwo = function (...arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   return total;
// };
// console.log(sumTotalExpesneTwo(1000, 4000, 500, 1000, 6000, 1000));

// Arrow function
// const print = (first_name, last_name) => {
//   // let full_name = first_name + ' ' + last_name;
//   let full_name = `${first_name} ${last_name}`;
//   return full_name;
// };
// console.log(print("Gizaw", "Simon"));

const printTwo = (first_name, last_name) => `${first_name} ${last_name}`;
console.log(printTwo("Nebyu", "Samuel"));
