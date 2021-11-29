// alert ('ciao');
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)
// Chiediamo all'utente una parola 
const wordUser = prompt('Inswerisci una parola');
// dividiamo la parole per singole stringhe così da poterle confrontare con la parola inserita dall'utente 
const wordSplit = wordUser.split('');
console.log(wordSplit);
// invertiamo le singole stringe in una variabile da poter utilizzare nel confronto con la parola inserita dall'utente 
const wordSplit = wordSplit.reverse;
console.log(wordSplit);

