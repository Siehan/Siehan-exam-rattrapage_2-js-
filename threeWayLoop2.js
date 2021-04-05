/*
threeWayLoop.js (threeWayLoop2.js)

Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, forEach  qui effectueront le même traitement.
Ce traitement consistera à afficher tous les éléments d'un tableau de string A L'ENVERS
(cad en partant de la fin) suivis de leur taille et de leur index dans le tableau.
Par exemple pour le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
nous obtiendrons l'affichage suivant 3 fois (1 fois par loop):

Eve, length: 3, index: 4
Dan, length: 3, index: 3
Charlie, length: 7, index: 2
Bob, length: 3, index: 1
Alice, length: 5, index: 0
*/

/*******************************************************************************************/

const chalk = require("chalk");

let tab = ["Alice", "Bob", "Charlie", "Dan", "Eve"];

console.log(chalk.red("---------- FOR LOOP ----------"));

for (let i = tab.length - 1; i >= 0; i--) {
  console.log(chalk.yellow(`${tab[i]}, length: ${tab[i].length}, index: ${i}`));
}

// Pas réussi à afficher les index des 2 boucles dans l'odre inversé

let tab2 = ["Alice", "Bob", "Charlie", "Dan", "Eve"].reverse();
console.log(chalk.red("---------- FOR OF LOOP ----------"));

let i = 0;
for (let element of tab2) {
  console.log(chalk.green(`${element}, length: ${element.length}, index: ${i}`));
  ++i;
}

console.log(chalk.red("---------- FOR EACH LOOP ----------"));

tab.forEach((element, index) => {
  console.log(chalk.blue(`${element}, length: ${element.length}, index: ${index}`));
});

/*
OUTPUT :

---------- FOR LOOP ----------
Eve, length: 3, index: 4
Dan, length: 3, index: 3
Charlie, length: 7, index: 2
Bob, length: 3, index: 1
Alice, length: 5, index: 0
---------- FOR OF LOOP ----------
Eve, length: 3, index: 0
Dan, length: 3, index: 1
Charlie, length: 7, index: 2
Bob, length: 3, index: 3
Alice, length: 5, index: 4
---------- FOR EACH LOOP ----------
Alice, length: 5, index: 0
Bob, length: 3, index: 1
Charlie, length: 7, index: 2
Dan, length: 3, index: 3
Eve, length: 3, index: 4

*/
