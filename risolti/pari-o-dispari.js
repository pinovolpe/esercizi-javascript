/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.

  Esempi:
    Input: numero = 63
    Output: 1

    Input: numero = 24
    Output: 0

  Consigli:
  Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :) 
  (Se non ti ricordi riguarda la lezione "Come dichiarare e definire le variabili e i tipi di dato" oppure "Il tipo Numero e gli operatori aritmetici")

  http://www.imparareaprogrammare.it
*/

var n1 = 63;
var n2 = 24;
document.write(n1 + ' = ' + (n1 % 2) + '<br />' + n2 + ' = ' + (n2 % 2));

/* ALTRE SOLUZIONI CHE HO IMPLEMENTATO - 1/2 */
// /* Verifico la variabile 1 */
// if (n1 % 2 == 0) {
// 	document.write('Il numero ' + n1 + ' è pari');
// } else {
// 	document.write('Il numero ' + n1 + ' è dispari');
// }

// document.write('<br />');

// /* Verifico la variabile 2 */
// if (n2 % 2 == 0) {
// 	document.write('Il numero ' + n2 + ' è pari');
// } else {
// 	document.write('Il numero ' + n2 + ' è dispari');
// }

/* ALTRE SOLUZIONI CHE HO IMPLEMENTATO - 2/2 */
// var scelta = parseInt(prompt('Scegli un numero'));
// //  verifica che stai effettivamente scrivendo un numero 
// if (isNaN(scelta)) {
//   alert('Non hai scritto un numero, segui le istruzioni!');
//   this.location.reload(true);
//  } else {
//   if (scelta % 2 == 0) {
//     document.write('Il numero ' + scelta + ' è pari');
//   } else {
//     document.write('Il numero ' + scelta + ' è dispari');
//   }
// }