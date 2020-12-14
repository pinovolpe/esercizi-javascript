/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

// https://www.gdipiro.com/javascript/4.array/difficile/2.azzeccaAzzera.js.html.txt

var vettore = Array();
for (var i = 0; i < 100; i++) {
  vettore[i] = Math.floor(Math.random() * 49 + 2);
}
var flag = true;
while (flag) {
  console.log("vettore: " + vettore);
  console.log("flag: " + flag);
  do {
    var risp = parseInt(prompt("Immetti un valore\n maggiore di 1\ne minore di 50"));
  } while (risp < 2 || risp > 50);
  for (var i = 0; i < 100; i++) {
    for (j = risp; j < 51; j += risp) {
      if (vettore[i] == j) vettore[i] = 0;
    }
  }
  flag = false;
  for (var j = 0; j < 100; j++) {
    if (vettore[j] > 0) flag = true;
  }
}