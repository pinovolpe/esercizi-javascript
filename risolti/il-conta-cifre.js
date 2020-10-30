/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

//var numero1 = '9';
//var numero2 = '245';
//document.write('numero ' + numero1 + ' = ' + numero1.length + ' cifra');
//document.write('numero ' + numero2 + ' = ' + numero2.length + ' cifre');
var n = Math.floor(Math.random() * 9999);
document.write(`Il numero ${n} è composto da ${n.toString().length} cifre`);
