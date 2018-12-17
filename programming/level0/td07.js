/* td07 - Les tableaux

Cet exercice est assez similaire au td06,
cette-fois ci vous devez implÃ©menter la
fonction td07 qui prend en paramÃ¨tre un
nombre nommÃ© max et retourne un tableau
contenant les nombres de 0 Ã  max (inclus).

*/

/* TD Part */

function td07(max) {
    var myString = [];
    for(var i = 0; i < max; i++){
        myString[i] = i;
    }
    return myString;
}

/* Testing Part */
const array = '0'.repeat(999).split('').map((i, id) => id);
if (td07(999).join('') === array.join('')) {
    console.log('TD07:: OK');
} else {
    console.log('TD07:: KO');
}