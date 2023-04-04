/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/

function sembraDifficile(n,k) {
  if ( k >= n) {
    console.log('output: 0')
  } else {
let number = Array.from(String(n), Number);
console.log('number:', number);
let reversed = number.reverse();
console.log('reversed:', reversed);
let unshifted = number.unshift(0);
console.log('unshift number:', number);
let output = number.find((elem, index) => index === k);
console.log('output:', output);
  }
}

sembraDifficile(123456,3)
