/* td02 - Tous les chemins...

Le but de ce TD est de terminer l'implémentation
de la fonction roman(). Celle-ci prend un nombre 
décimal en paramètre et retourne une chaîne de
caractères contenant la représentation de ce nombre
en chiffres romains.

*/

/* TD Part */

function roman(decimal) {
    var centaine = ["", "C", "CC", "CCC", "CD", "D",
        "DC", "DCC", "DCCC", "CM"];
    var dixaine = ["", "X", "XX", "XXX", "XL", "L",
        "LX", "LXX", "LXXX", "XC"];
    var unite = ["", "I", "II", "III", "IV", "V",
        "VI", "VII", "VIII", "IX"];

    var result = "";

    if(decimal >= 100){
        var count = 0;
        while (decimal >= 100){
            count ++;
            decimal = decimal - 100;
        }
        result += centaine[count];
    }
    if(decimal >= 10){
        var count = 0;
        while (decimal >= 10){
            count ++;
            decimal = decimal - 10;
        }
        result += dixaine[count];
    }
    if(decimal > 0){
        var count = 0;
        while (decimal > 0){
            count ++;
            decimal = decimal - 1;
        }
        result += unite[count];
    }
    return result
}


/* Testing Part */
if (roman(64) == 'LXIV' && roman(128) == 'CXXVIII' && roman(512) == 'DXII') {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO');
}