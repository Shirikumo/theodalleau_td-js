/* td06 - PremiÃ¨re boucle

Maintenant, passons Ã  l'utilisation de boucles !
Le but de ce TD est de terminer d'implÃ©menter la
fonction loop100, qui retourne une chaÃ®ne de
caractÃ¨res contenant Ã  la suite, sans espace les
nombres de 0 Ã  999.

Une chaine de la forme : "012345678910111213"->
jusqu'Ã  999 inclus

*/

/* TD Part */

function loop999() {
    var myString = '';
    for(var i = 0; i <= 999; i++){
        myString += i;
    }
    console.log(myString);
    return myString;
}

/* Testing Part */
const array = '0'.repeat(1000).split('').map((i, id) => id).join('');
if (loop999() === array) {
    console.log('TD06:: OK');
} else {
    console.log('TD06:: KO');
}