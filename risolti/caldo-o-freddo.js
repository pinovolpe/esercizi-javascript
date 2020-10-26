/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6


  http://www.imparareaprogrammare.it
*/

var temperature = [10, -2, 31, 22, 15, -6, 7]

var calda = Math.max(...temperature);
var fredda = Math.min(...temperature);

document.write(`giornata più calda = ${calda}, giornata più fredda = ${fredda}`);
