/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

// Ciclo for
var tabellina = 5;
for(var i = 0; i <= 10; i++) {
  risultato = i * tabellina;
  document.write(`${tabellina} * ${i} = ${risultato}<br>`);
}

// Ciclo while
var	tabellina = 5;
var	i = 0;
while(i <= 10) {
  risultato = i * tabellina;
  document.write(`${tabellina} * ${i} = ${risultato}<br>`);
	i = i + 1;
}
