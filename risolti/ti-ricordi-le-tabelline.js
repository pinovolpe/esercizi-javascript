/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

var	tabellina = 5;
var	i = 0;
while(i <= 10) {
	document.write(tabellina * i + ' ');
	i = i + 1;
}
