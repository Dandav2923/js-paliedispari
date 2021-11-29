// alert ('ciao');
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)



// Chiediamo all'utente una parola 

// let wordUser = prompt('Inswerisci una parola');

// dividiamo la parole per singole stringhe così da poterle confrontare con la parola inserita dall'utente 

// let wordSplit = wordUser.split('');
// console.log(wordSplit);

// invertiamo le singole stringe in una variabile da poter utilizzare nel confronto con la parola inserita dall'utente 

// let wordReverse = wordSplit.reverse();
// console.log(wordReverse);

// se effettuassimo la condizione ora tra le variabili non riusciremo ad andare avanti poichè abbiamo diviso ed invertito le stringhe, quindi esiste un modo per ricongiungere le stringhe? 
// L'internet ha la risposta sicuramente.

// let wordJoin= wordSplit.join('');
// console.log(wordJoin);

// ora abbiamo la parola ricostruita e possiamo impostare la condizione 

// if (wordUser == wordJoin) {
//     console.log('La parola inserita è palindroma');
// } else {
//     console.log('La parola inserita non è palindroma');
// }

// creiamo la funzione per gestire le parole palindrome 


// Dichiarazione delle variabili della funzione
let wordUser = prompt('Inswerisci una parola');
let wordReverse = wordPalindroma(wordUser);

// Condizione da verificare per la parola inserita dall'utente 
if (wordUser == wordReverse) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}

// struttura della funzione per poterla riustilizzare nel codice 
function wordPalindroma(parolaInversa) {
    let wordInversa = parolaInversa.split('').reverse().join('');
    return wordInversa;
}