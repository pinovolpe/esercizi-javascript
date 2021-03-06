/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

var a = parseInt(prompt('Inserisci un numero intero'));
var b = parseInt(prompt('Inserisci un altro numero intero'));
var operazione = prompt('Inserisci una di queste parole per eseguire l\'operazione: somma, sottrazione, moltiplicazione, divisione, modulo, potenza, media');
var somma = a + b;
var sottrazione = a - b;
var moltiplicazione = a * b;
var divisione = a / b;
var modulo = a % b;
var potenza = a ** b; // oppure Math.pow(a, b);
var media = (a + b) / 2;

switch (operazione) {
case 'somma':
document.write(`${a} + ${b} = ${somma}`);
break;
case 'sottrazione':
document.write(`${a} - ${b} = ${sottrazione}`);
break;
case 'moltiplicazione':
document.write(`${a} * ${b} = ${moltiplicazione}`);
break;
case 'divisione':
document.write(`${a} : ${b} = ${divisione}`);
break;
case 'modulo':
document.write(`Il resto tra ${a} e ${b} è ${modulo}`);
break;
case 'potenza':
document.write(`${a} elevato a ${b} fa ${potenza}`);
break;
case 'media':
document.write(`La media tra ${a} e ${b} è ${media}`);
break;
default: {    
alert('Operazione non valida (non presente tra le operazioni consentite).');
this.location.reload(true);
}
}
