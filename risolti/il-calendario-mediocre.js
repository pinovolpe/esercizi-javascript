/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/

// Svolgimento regolare
var settimana = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
var giorno = settimana.indexOf('Lunedì');
var output = '';

for (var i = 1; i < 31 + 1; i++) {
    giorno = (giorno % 7);
    output += settimana[giorno] + ' ' + i + '<br>';
    giorno++;
}
document.write(output);

// Svolgimento variante
var settimana = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
var giorni = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var mese = mesi.indexOf('Gennaio');
var giorniMese = giorni[mese];
var giorno = settimana.indexOf('Lunedì');
var output = '';

for (var i = 1; i < giorniMese + 1; i++) {
    giorno = (giorno % 7);
    output += settimana[giorno] + ' ' + i + '<br>';
    giorno++;
}
document.write(output);