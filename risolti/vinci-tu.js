/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.

  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

// VECCHIA SOLUZIONE: UTILIZZO 2 CICLI FOR
// var maxTiri = Math.floor(Math.random() * (6-1) + 1);
// var numeroTiri = 1;
// var numeroTiri2 = 1;
// var punteggio = 0;
// var punteggio2 = 0;

// document.write("Avete diritto a " + maxTiri + " tiri");
// document.write('<br><br>');

// for (numeroTiri; numeroTiri <= maxTiri; numeroTiri++) {
//     var punteggioTiro = Math.floor(Math.random() * (6-1) + 1);
//     punteggio += punteggioTiro;
//     document.write("Giocatore A tiro " + numeroTiri + ": " + punteggioTiro + "<br>");
// }
// document.write("Totale Giocatore A: " + punteggio);

// document.write('<br><br>');

// for (numeroTiri2; numeroTiri2 <= maxTiri; numeroTiri2++) {
//     var punteggioTiro2 = Math.floor(Math.random() * (6-1) + 1);
//     punteggio2 += punteggioTiro2;
//     document.write("Giocatore B tiro " + numeroTiri2 + ": " + punteggioTiro2 + "<br>");
// }
// document.write("Totale Giocatore B: " + punteggio2);

// document.write('<br><br>');

// if(punteggio > punteggio2)
// document.write("Ha vinto Giocatore A");
// else if(punteggio == punteggio2)
// document.write("PAREGGIO");
// else
// document.write("Ha vinto Giocatore B");

// UPDATE: RISOLVO L'ESERCIZIO CON L'USO DI UN SOLO CICLO FOR
var maxTiri = Math.floor(Math.random() * (6 - 1) + 1);
var punteggioA = 0;
var punteggioB = 0;

document.write("Avete diritto a " + maxTiri + " tiri");
document.write('<hr>');

for (numeroTiri = 1; numeroTiri <= maxTiri; numeroTiri++) {
    var punteggioTiroA = Math.floor(Math.random() * (6 - 1) + 1);
    var punteggioTiroB = Math.floor(Math.random() * (6 - 1) + 1);
    punteggioA += punteggioTiroA;
    punteggioB += punteggioTiroB;
    document.write("Giocatore A tiro " + numeroTiri + ": " + punteggioTiroA + "<br>");
    document.write("Giocatore B tiro " + numeroTiri + ": " + punteggioTiroB + "<br>");
}

document.write('<hr>');
document.write("Totale Giocatore A: " + punteggioA);
document.write('<br>');
document.write("Totale Giocatore B: " + punteggioB);
document.write('<hr>');

if (punteggioA > punteggioB)
    document.write("Ha vinto Giocatore A");
else if (punteggioA == punteggioB)
    document.write("PAREGGIO");
else
    document.write("Ha vinto Giocatore B");