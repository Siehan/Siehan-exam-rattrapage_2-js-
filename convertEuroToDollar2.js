/*
convertEuroToDollar.js
Ecrire une fonction convertEuroToDollar qui fait la conversion
d'une somme exprimée en Euros, en Dollars. 1 euro est égal à 1.18 dollars
*/

const chalk = require("chalk");

const convertEuroToDollar = (euro) => {
  return (usd = euro * 1.18);
};

console.log(chalk.yellow(convertEuroToDollar(3).toFixed(2) + " USD"));
// OUTPUT 3.54 USD if 3 euros or 11,80 USD if 10 euros
