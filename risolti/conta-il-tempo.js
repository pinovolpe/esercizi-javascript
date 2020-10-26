/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var totaleSecondi = 12560;
var unOra = 3600;
var unMinuto = 60;
var restoOre = totaleSecondi % unOra;

var ore = Math.floor(totaleSecondi / unOra);
var minuti = Math.floor(restoOre / unMinuto);
var secondi = restoOre % (minuti * unMinuto);

document.write('ore = ' + ore + ', minuti = ' + minuti + ', secondi = ' + secondi);
