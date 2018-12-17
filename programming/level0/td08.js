/* td08 - Array includes

Le but de ce TD est de terminer l'implÃ©mentation
de la fonction td08. Elle prend un tableau ainsi
qu'un Ã©lÃ©ment en paramÃ¨tre. Si l'Ã©lÃ©ment fait
partie du tableau, td08 doit retourner true. Sinon
la fonction retournera false.

*/

/* TD Part */

function td08(array, item) {
    if(array.indexOf(item) != '-1'){
        return true;
    }
    return false;
}

/* Testing Part */

if (td08([1, 2, 3, 4, 5, 6, 7, 8, 9], 4) === true &&
    td08([1, 2, 3, 4, 5, 6], 9) === false) {
    console.log('TD08 :: OK')
} else {
    console.log('TD08 :: KO')
}