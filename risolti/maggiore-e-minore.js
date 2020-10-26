/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

var a = 3;
var b = -1;
var c = 4;
var d = -2;

var alto = Math.max(a, b, c, d);
var basso = Math.min(a, b, c, d);

document.write('maggiore = ' + alto + ', minore = ' + basso);
