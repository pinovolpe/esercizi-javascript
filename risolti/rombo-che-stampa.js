/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
https://www.gdipiro.com/javascript/3.ciclo/difficili/costruireUnRombo.js.html.txt
*/

var output = '';
var numeroSopra = 15;
var numeroSotto = numeroSopra;

var i = 1; // Numero di asterischi
while (numeroSopra > 0) {
    var tab = Math.floor(numeroSopra / 2);
    for (var k = 0; k < tab; k++) {
        output += ' '; // Spazi di indentazione
    }
    var j = i;
    while (j > 0) {
        output += '*';
        j--;
    }
    output += '\n';
    i += 2;
    numeroSopra -= 2;
}

i = numeroSotto - 2; // Numero di asterischi
numeroSopra = numeroSotto;
tab = 1;
while (numeroSopra > 0) {
    for (k = 0; k < tab; k++) {
        output += ' '; // Spazi di indentazione
    }
    tab++;
    j = i;
    while (j > 0) {
        output += '*';
        j--;
    }
    output += '\n';
    i -= 2;
    numeroSopra -= 2;
}
console.log(output);