/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

// Utilizza costrutto If
// Lascio generare il voto al computer

var voto = Math.floor(Math.random() * (30-1) + 1);

if (voto < 18) {
  document.write(`Voto ${voto}: insufficiente`);
}
else if (voto >= 18 && voto <= 21) {
  document.write(`Voto ${voto}: sufficiente`);
}
else if (voto >= 21 && voto <= 24) {
  document.write(`Voto ${voto}: buono`);
}
else if (voto >= 24 && voto <= 27) {
  document.write(`Voto ${voto}: distinto`);
}
else if (voto >= 27 && voto <= 29) {
  document.write(`Voto ${voto}: ottimo`);
}
else { 
  document.write(`Voto ${voto}: eccellente`);
}

// Utilizza costrutto Switch-Case
// Richiedo l'inserimento manuale del voto per procedere alla conversione

var voto = parseInt(prompt('Per convertire il voto inserisci un mumero da 1 a 30'));

if (isNaN(voto)) {
  alert('Non hai scritto un numero, segui le istruzioni!');
  this.location.reload(true);
 } else {
  switch (true) {
      case voto >= 1 && voto <= 18:
      document.write(`Voto ${voto}: insufficiente`);
      break;
      case voto >= 19 && voto <= 21:
      document.write(`Voto ${voto}: sufficiente`);
      break;
      case voto >= 22 && voto <= 24:
      document.write(`Voto ${voto}: buono`);
      break;
      case voto >= 25 && voto <= 27:
      document.write(`Voto ${voto}: distinto`);
      break;
      case voto >= 28 && voto <= 29:
      document.write(`Voto ${voto}: ottimo`);
      break;
      case voto == 30:
      document.write(`Voto ${voto}: eccellente`);
      break;
      default: {    
      alert('Il voto inserito ' + voto + ' non è valido!');
      this.location.reload(true);
    }
  }
}
