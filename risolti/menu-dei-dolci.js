/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

var scelta = parseInt(prompt('Per scegliere un dolce inserisci un mumero da 1 a 4'));
//  verifica che stai effettivamente scrivendo un numero 
if (isNaN(scelta)) {
  alert('Non hai scritto un numero, segui le istruzioni!');
  this.location.reload(true);
 } else {
switch (scelta) {
// in caso di corrispondenza si ferma, altrimenti continua
  case 1:
    document.write('Hai scelto il dolce Tiramisù!');
    break;
  case 2:
    document.write('Hai scelto il dolce Torta della nonna!');
    break;
  case 3:
    document.write('Hai scelto il dolce Cheesecake alla nutella!');
    break;
  case 4:
    document.write('Hai scelto il dolce Macedonia!');
    break;
// default se non trova nessun criterio corrispondente
  default: {    
  alert('Nessun dolce che corrisponde al numero ' + scelta + ', segui le istruzioni!');
  this.location.reload(true);
}
}
}