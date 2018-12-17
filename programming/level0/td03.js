/* td03

Le but de ce TD est d'implÃ©menter la fonction
"mul", qui prend deux paramÃ¨tres (a et b) et
retourne le produit de ceux-ci.

*/

/* TD Part */

// Ã€ vous de rajouter votre fonction ici !
function mul(a, b){
    return a * b;
}

/* Testing Part */

const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);

if (mul(a, b) == (a * b)) {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO')
}