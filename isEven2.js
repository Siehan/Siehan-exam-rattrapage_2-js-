/*
isEven.js (isEven2.js)

Ecrire une fonction isEven qui prend un nombre en paramètre et qui devra retourner true
si le nombre passé en paramètre est pair, sinon la fonction retournera false.
*/
const chalk = require("chalk");

const isEven = (nb) => {
  if (nb % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(chalk.red("-----------------------------------"));

console.log(isEven(7)); // OUTPUT : false
//console.log(isEven(3)); // OUTPUT : false
//console.log(isEven(6)); // OUTPUT : true

//if (nb % 2 !== 0)
