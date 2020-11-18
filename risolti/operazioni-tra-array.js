/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

var a = [];
while (a.length < 10) {
    var numero = Math.floor(Math.random() * 10) + 1;
    if (a.indexOf(numero) === -1) a.push(numero);
}
document.write('Array 1: ' + a + '<hr />');

var b = [];
while (b.length < 10) {
    var numero = Math.floor(Math.random() * 10) + 1;
    if (b.indexOf(numero) === -1) b.push(numero);
}
document.write('Array 2: ' + b + '<hr />');

function addizione(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}

function sottrazione(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        c.push((a[i] || 0) - (b[i] || 0));
    }
    return c;
}

function moltiplicazione(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        c.push((a[i] || 0) * (b[i] || 0));
    }
    return c;
}

function divisione(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        c.push((a[i] || 0) / (b[i] || 0));
    }
    return c;
}

/* Parte in HTML per la scelta dell'operazione da mostrare
<p>Scegli l'operazione</p>
<button onclick="document.getElementById('risultato').innerHTML = 'Addizione: ' + addizione(a, b);">Addizione</button>
<button onclick="document.getElementById('risultato').innerHTML = 'Sottrazione: ' + sottrazione(a, b);">Sottrazione</button>
<button onclick="document.getElementById('risultato').innerHTML = 'Moltiplicazione: ' + moltiplicazione(a, b);">Moltiplicazione</button>
<button onclick="document.getElementById('risultato').innerHTML = 'Divisione: ' + divisione(a, b);">Divisione</button>
<p></p>
<div id="risultato"></div>
*/