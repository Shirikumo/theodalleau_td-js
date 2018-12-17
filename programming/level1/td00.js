/* td00 - Bienvenue !

Le but de ce TD est de terminer d'implémenter la fonction
DNAdiff. Elle ne prend pas de paramètres et retourne le 
nombre de différences entre ces deux séquences (la distance
de Hamming <https://fr.wikipedia.org/wiki/Distance_de_Hamming>).
Les deux séquences testées auront la même longueur.

*/

/* TD Part */

const dna1 = 'ttttaaggaaatctttaacgattgcccgcagaacgtaggtatttaacgattcgaaccgaa'+
'aacgctcgatctgacatgcggactgcgtggaggccgtgttaagccctatttggtcccaaa' +
'ctactgattcaatttgcaacgacgaattaccaattcgtctatcgaggtagccgttgcgtc' +
'ggcggtaccatttaataactaaaagccctagccatacccacatttcccctcttgctatgt' +
'tcgggaccacatccaatcttgctgtgatccttcagaaattgtatgagggtcgggtccatg' +
'cttaggcctgtcctcaatgtgcagtaccagcagtgagaaggcaaatcctgctctcagttc' +
'ttaggtctcgtaaagtctagagcggctttactcacagcacgcaataaggtactgtttgtc' +
'ggtcagctgtgagcccaacagatccaaagccctgttagcactgatgcagatcaaacgaga' +
'tccggcttttccagactacaccagatactaacatgatcatcatctcccgcccatgaccat' +
'gtccccgaggaagccaaggatagaaataacttgtgatattcattagctagcgctcagaat' +
'gaagagaacattggccaaatagccgcctagaaatcgaatgacaagtttggtgggaagctg' +
'cggaggcatagcacacgagagatcttgcggtgtgggataaacgttgaaggaactgccctc' +
'aggctatcatacccggcatggcctattagcggacctgatcgggatcggggatttttcaaa' +
'taaggggagtggttctaaggagccctgtaggtgtggcctctttggttatggcaaaaccag' +
'gtaaatagttagtatgctttccccaagcctccttgccacctgaaaccgcctctttgtgcc' +
'tcccaaaaatcgagaataatggaagctttctaacggtgcccacttcgaccgtcttattcg'

const dna2 = 'gctttgaagttcggaataggcgcactgttagcagaggctatccacaagcttccaacccgg' +
'cgctaacgcttttcccgggctctgggctgacacagtagggatcccaggatgtgttgaggg' +
'gtgtgcgctctcaaaatacctgagtatgggcgacaaggaaagacgaacggttcgtatagc' +
'tggcgtctcggagccccttcacgatagtcgcagtggtgtatagtcatcagttgacggcgt' +
'ggcgcctgttgctgctctgttataacgcatctgttctgtaggcgtaaaactggcatgccg' +
'tccactcagagatagtgtacacgtcctaactgacaaatgtacctctgtccgatctttagt' +
'caatcccttgggtctgctacaggaaccaatcggtaaaattgctaactgataggaatcacg' +
'aacaataaaagaatacgaagggtagtgtaaacactaaaaatgagttacactgttatatgg' +
'aggcggcggggcctttgtcagaggccaggacgtaagttttggtcaggcaaattggaatcc' +
'attcatcgtttggactggatgaaactggatgtgtgtgacataattagggccggattgtca' +
'aagagtcaggagattaagttacaaagccctgcctaattagttaccctggtaatccatgtc' +
'agttggagcgatcgaccgcgcatttagtgccattcgtttgtgttttccagtcataggagc' +
'gcataactcgtgtgtgaataagagggttgagattgggagcatgtcgtggcatacaacgat' + 
'aaggaaatagggctagggtcctgatgtgacgtgcatgccaagggtggaggcgatgcatat' +
'ttggccttatagaatatcagctttcggcgtcagaaccgtgtacgctgaaccatcccatac' +
'aggcagttcccttttatactaggtaggatggccctatgttcgcagatttcgaacatgact'

function DNAdiff() {
    //je sais que les deux chaînes font la même longueur
    var tmp_dn1 = dna1.split('');
    var tmp_dn2 = dna2.split('');
    var count = 0;
    for(var i = 0; i < dna1.length; i++){
        if(tmp_dn1[i] != tmp_dn2[i]){

            count ++;
        }
    }
    return count;
}

/* Testing Part */

DNAdiff() == 716 ? console.log('TD00: OK') : console.log('TD00: KO')