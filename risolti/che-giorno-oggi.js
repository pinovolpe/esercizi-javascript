/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/

// I giorni della settimana
// In questa versione ho pensato di chiedere all'utente di inserire un numero per sapere a che giorno corrisponde
// Previsti i 7 casi corretti, il caso di errore default (se il mumero inserito non è tra 1 e 7) e il caso di 'Not a Number'
var numero = parseInt(prompt('Inserisci un numero'));
if (isNaN(numero)) {
    alert('Non hai inserito un numero!');
    this.location.reload(true);
}
else {
    switch (numero) {
    case 1:
        document.write('Lunedì');
	break;
    case 2:
        document.write('Martedì');
	break;
    case 3:
        document.write('Mercoledì');
	break;
    case 4:
        document.write('Giovedì');
	break;
    case 5:
        document.write('Venerdì');
	break;
    case 6:
        document.write('Sabato');
	break;
    case 7:
        document.write('Domenica');
	break;
    default: {
        alert('Errore! Giorno della settimana non valido!');
        this.location.reload(true);
	    break;
        }
    }
}

// I nomi dei mesi
// In questa versione ho poensato di generare un numero random per sapere a che mese corrisponde
// Sebbene i mesi siano 12, inserisco un limite maggiore (20) in modo da poter generare anche il caso di default
var numero = Math.floor(Math.random() * (20-1) + 1)
switch (numero) {
    case 1:
        document.write('Il mese numero ' + numero + ' è Gennaio');
	break;
    case 2:
        document.write('Il mese numero ' + numero + ' è Febbraio');
	break;
    case 3:
        document.write('Il mese numero ' + numero + ' è Marzo');
	break;
    case 4:
        document.write('Il mese numero ' + numero + ' è Aprile');
	break;
    case 5:
        document.write('Il mese numero ' + numero + ' è Maggio');
	break;
    case 6:
        document.write('Il mese numero ' + numero + ' è Giugno');
	break;
    case 7:
        document.write('Il mese numero ' + numero + ' è Luglio');
	break;
    case 8:
        document.write('Il mese numero ' + numero + ' è Agosto');
	break;
    case 9:
        document.write('Il mese numero ' + numero + ' è Settembre');
	break;
    case 10:
        document.write('Il mese numero ' + numero + ' è Ottobre');
	break;
    case 11:
        document.write('Il mese numero ' + numero + ' è Novembre');
	break;
    case 12:
        document.write('Il mese numero ' + numero + ' è Dicembre');
	break;
    default: 
        document.write('Numero = ' + numero + ' Errore! Numero non valido!');
	break;
}
