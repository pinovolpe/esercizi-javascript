/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

//https://www.gdipiro.com/javascript/4.array/difficile/1.MettiOrdine.js.html.txt

var lunghezza = 10;
var N = lunghezza;
var disordinato = Array();
var ordinato = Array();
for (var i = 0; i < lunghezza; i++) {
  disordinato[i] = Math.floor(Math.random() * 51 - 25);
}
console.log(disordinato);
ordinato = disordinato;
//vettore = [23,13,0,-7,2,-9,1,7,-8,-16];
for (i = 0; i < lunghezza - 1; i++) {
  for (var j = 0; j < N - 1; j++) {
    if (ordinato[j] > ordinato[j + 1]) {
      var app = ordinato[j];
      ordinato[j] = ordinato[j + 1];
      ordinato[j + 1] = app;
    }
  }
  N--;
}
alert(ordinato);