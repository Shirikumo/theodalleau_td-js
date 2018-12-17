/* td09 - Bissextile

Le but de ce dernier TD du level0 est d'implÃ©menter
la fonction leap(year).

Cette fonction prend une annÃ©e en paramÃ¨tre, et
retourne true si l'annÃ©e passÃ© en paramÃ¨tre est bissextile.
Sinon, false sera retournÃ© !

Pour rappel, une annÃ©e est bissextile si elle est :
- divisible par 4 et non divisible par 100 OU
- divisible par 400

*/

/* TD Part */
function leap(year){

    if((year % 4) != 0){
        return false;
    } else if((year % 100) != 0){
        return true;
    } else if((year % 400) != 0){
        return false
    }
    return true;
}


/* Testing Part */
const years = [2019, 2020, 2021, 2022, 2023, 2024]
try {
    const result = years.map(y => leap(y))
    if (result.join() == [false, true, false, false, false, true].join()) {
        console.log('TD09:: OK')
    } else {
        console.log('TD09:: KO')
    }
} catch(e) {
    console.log('TD09:: KO');
}