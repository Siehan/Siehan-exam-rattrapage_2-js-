/*
information.js (information2.js)

Lisez cet exercice entièrement avant de commencer.
Ecrire une fonction information qui prend 4 paramètres:

un prénom qui sera une string
un nom qui sera une string
un âge qui sera un number
un sexe qui sera une string parmi M, F, ?
Cette fonction devra afficher le message suivant en fonction des paramètres:

information('Sofiane', 'Akermoun', 39, 'M')
affichera:
prenom: Sofiane
nom: Akermoun
age: 39
Monsieur, vous êtes majeur depuis 21 ans

information('Alice', 'Liddell', 7, 'F')
affichera:
prenom: Alice
nom: Liddell
age: 7
Madame, vous serez majeur dans 11 ans

information('Valerie', 'Dupont', 7, '?')
affichera:
prenom: Valerie
nom: Dupont
age: 7
vous serez majeur dans 11 ans

Pour notre exercice l'âge de la majorité est 18 ans et ne vous souciez pas de la gestion
du singulier/pluriel dans votre affichage.
*/
const chalk = require("chalk");
/*******************************************************************************************/

let firstName = "";
let lastName = "";
let age = 0;
let genre = ["M", "F", "?"];

const information = (firstName, lastName, age, genre) => {
  console.log(chalk.green(`First name: ${firstName}`));
  console.log(chalk.blue(`Last name: ${lastName}`));
  console.log(chalk.yellow(`Age: ${age}`));
  console.log(chalk.magenta(`Genre: ${genre}`));

  if (age >= 18 && genre === "M") {
    console.log(`Monsieur, you are major since ${age - 18} years`);
  } else if (age >= 18 && genre === "F") {
    console.log(`Madame, you are major since ${age - 18} years`);
  } else if (age < 18 && genre === "M") {
    console.log(`Monsieur, you will be major in ${18 - age} years`);
  } else if (age < 18 && genre === "F") {
    console.log(`Madame, you will be major in ${18 - age} years`);
  } else {
    console.log(`You will be major in ${18 - age} years`);
  }
};
console.log(chalk.red("-----------------------------------"));

information("Sofiane", "Akermoun", 39, "M");

console.log(chalk.red("-----------------------------------"));

information("Alice", "Liddell", 7, "F");

console.log(chalk.red("-----------------------------------"));

information("Valérie", "Dupont", 7, "?");

console.log(chalk.red("-----------------------------------"));

/*
OUTPUT :
-----------------------------------
First name: Sofiane
Last name: Akermoun
Age: 39
Genre: M
Monsieur, you are major since 21 years
-----------------------------------
First name: Alice
Last name: Liddell
Age: 7
Genre: F
Madame, you will be major in 11 years
-----------------------------------
First name: Valérie
Last name: Dupont
Age: 7
Genre: ?
You will be major in 11 years
-----------------------------------
*/
