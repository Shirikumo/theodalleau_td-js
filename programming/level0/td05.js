/* td05 - Manipulation de strings

Le but de ce TD est d'Ć©crire la fonction "hello"
qui prend en paramĆØtre un nom et retourne la
chaĆ®ne de caractĆØre "Hello {nom}, how are you?"

Par exemple avec hello("Anon") => "Hello Anon, how are you?".

*/

/* TD Part */

function hello(nom) {
    return 'Hello ' + nom + ', how are you?';
}

/* Testing Part */

hello('lp1') === 'Hello lp1, how are you?' ? console.log('TD00:: OK') : console.log('TD00:: KO')