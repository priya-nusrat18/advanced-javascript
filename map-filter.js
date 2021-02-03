const numbers = [2, 4, 5, 8, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     result= element * element;
//     output.push(result);
// }
// console.log(output);



// const result = numbers.map(function (element) {
//     return element * element;
// })
// console.log(result);



const result = numbers.map(element => element * element);
console.log(result);



// const bigger = numbers.filter(element => element > 5);
// console.log(bigger);

// const isThere = numbers.find(element => element > 7);
// console.log(isThere);