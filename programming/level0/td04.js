/* td04

Le but de cet exercice est d'implÃ©menter
la fonction square qui retourne le carrÃ©
du nombre a passÃ© en paramÃ¨tre !

*/

/* TD Part */

function square(a) {
    return a * a;
}

/* Testing Part */

const a = Math.floor(Math.random() * 10);

if (square(a) == (Math['pow'](eval('a'), 0x02))) {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO');
}