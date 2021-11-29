// alert ('ciao');

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

let userChoiceEvenOdd;

while (userChoiceEvenOdd != 'pari' && userChoiceEvenOdd != 'dispari') {
    userChoiceEvenOdd = prompt('Scegli pari o dispari');
}
let userChoiceNumber;
while (!(userChoiceNumber >= 1 && userChoiceNumber <= 5 && !(isNaN(userChoiceNumber)))){
    userChoiceNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));
}

let pcChoice = Math.floor(Math.random() * 5) + 1;
console.log(pcChoice);

let sommaNumbers = userChoiceNumber + pcChoice ;
console.log(sommaNumbers);

if ((userChoiceEvenOdd == 'pari') && (sommaNumbers % 2 == 0)) {
    console.log('hai vinto');
} 
else if (((userChoiceEvenOdd == 'dispari') && (sommaNumbers % 2 != 0))){
    console.log('hai vinto');
}
 else {
    console.log('hai perso');
}