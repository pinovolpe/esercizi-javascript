/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/

// Soluzione 1
function cifre() {
  let n = Math.floor(Math.random() * 9999);
  document.write(n);
  console.log(n.toString().length);
}

// Oppure, si ha lo stesso risultato con:
// const cifre = function () {
//     let n = Math.floor(Math.random() * 9999);
//     document.write(n);
//     console.log(n.toString().length);
// }

cifre();