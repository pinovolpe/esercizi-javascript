/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

var a = [3, 5, 10, 2, 8]
var somma = a.reduce((previous, next) => {
    return previous + next;
});
var numeri = a.length;
var media = somma / numeri;

function min(value) {
    return value <= media;
}
var minori = a.filter(min);

function max(value) {
    return value >= media;
}
var maggiori = a.filter(max);

document.write(`Array = [${a}]<br>Somma = ${somma}, media = ${media}, valori minori = [${minori}], valori maggiori = [${maggiori}]`);