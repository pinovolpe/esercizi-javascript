/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var estrazione = [];
while (estrazione.length < 10) {
    var numero = Math.floor(Math.random() * 90) + 1;
    if (estrazione.indexOf(numero) === -1) estrazione.push(numero);
}
document.write(`Numeri estratti: ${estrazione}`);

document.write('<hr />');

var cartella = [];
while (cartella.length < 10) {
    var numero = Math.floor(Math.random() * 90) + 1;
    if (cartella.indexOf(numero) === -1) cartella.push(numero);
}
document.write(`La tua cartella: ${cartella}`);

Array.prototype.diff = function(arr2) {
    var ret = [];
    this.sort();
    arr2.sort();
    for (var i = 0; i < this.length; i += 1) {
        if (arr2.indexOf(this[i]) > -1) {
            ret.push(this[i]);
        }
    }
    return ret;
};

document.write('<hr />');

if (estrazione.diff(cartella).length == 2) {
    document.write(`Hai preso i numeri ${estrazione.diff(cartella)}: hai fatto AMBO!`);
} else if (estrazione.diff(cartella).length == 3) {
    document.write(`Hai preso i numeri ${estrazione.diff(cartella)}: hai fatto TERNO!`);
} else if (estrazione.diff(cartella).length == 4) {
    document.write(`Hai preso i numeri ${estrazione.diff(cartella)}: hai fatto QUATERNA!`);
} else if (estrazione.diff(cartella).length == 5) {
    document.write(`Hai preso i numeri ${estrazione.diff(cartella)}: hai fatto CINQUINA!`);
} else if (estrazione.diff(cartella).length == 10) {
    document.write(`Hai preso tutti i numeri: hai fatto TOMBOLA!`);
} else {
    document.write(`Mi dispiace, hai perso!`);
}