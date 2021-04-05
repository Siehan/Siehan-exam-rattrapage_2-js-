/*
fiveWayLoop.js (fiveWayLoop2.js)

Même exercice que précédemment mais ajouter deux boucles do-while et while pour effectuer le traitement.

*/

/*******************************************************************************************/

const chalk = require("chalk");

// Pas réussi à afficher les index des 2 boucles dans l'odre inversé

let tab = ["Alice", "Bob", "Charlie", "Dan", "Eve"].reverse();

console.log(chalk.red("---------- DO WHILE LOOP ----------"));

let i = 0;
while (i < tab.length) {
  console.log(chalk.yellow(`${tab[i]}, length: ${tab[i].length}, index: ${i}`));
  ++i;
}

console.log(chalk.red("---------- WHILE LOOP ----------"));

let index = 0;
do {
  console.log(chalk.green(`${tab[index]}, length: ${tab[index].length}, index: ${index}`));
  ++index;
} while (index < tab.length);

/*

OUTPUT :
---------- DO WHILE LOOP ----------
Eve, length: 3, index: 0
Dan, length: 3, index: 1
Charlie, length: 7, index: 2
Bob, length: 3, index: 3
Alice, length: 5, index: 4

---------- WHILE LOOP ----------
Eve, length: 3, index: 0
Dan, length: 3, index: 1
Charlie, length: 7, index: 2
Bob, length: 3, index: 3
Alice, length: 5, index: 4

*/
