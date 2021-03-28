const chalk = require("chalk");

/*
sumAll.js

Ecrire une fonction sumAll qui prend comme paramètre un tableau de number
et retourne la somme de tous les nombres de ce tableau.

*/

/***************     UNE 5EME VERSION     **********/

const sumAll = [10, 20, 30];
const result = sumAll.reduce(function (nb1, nb2) {
  return nb1 + nb2;
}, 0);
console.log(result); // OUTPUT: 60

/***************     UNE 4EME VERSION - DETAILLEE     **********/

/* https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce */

// this is our initial value i.e. the starting point
const initialValue = 0;

// numbers array
const numbers = [5, 10, 15];

// reducer method that takes in the accumulator and next item
const reducer2 = (accumulator, item) => {
  return accumulator + item;
};

// we give the reduce method our reducer function and our initial value
//const total = numbers.reduce(reducer2, initialValue);
console.log(chalk.blue(numbers.reduce(reducer2, initialValue))); // OUTPUT: 30;

/***************     UNE 3EME VERSION     **********/

let value = 0;

const array3 = [5, 10, 15];

for (let i = 0; i < array3.length; i++) {
  value += array3[i];
}
console.log(chalk.red(value)); //   OUTPUT: 30;

/***************    UNE 2EME VERSION     **********/

const array2 = [0, 1, 100, 7, 70, 2, 5, 3].reduce((a, b) => a + b, 0);
console.log(chalk.green(array2)); // OUTPUT: 188

/***************    UNE 1ERE VERSION     **********/

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(chalk.magenta(array1.reduce(reducer, 0))); // OUTPUT: 10 with 0 in currentValue or 15 with 5
