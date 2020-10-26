/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

// ho fatto una piccola modifica al compito per renderlo più interessante, aggiornando più volte la pagina si apprezza la logica del programma:
// i numeri sono da 1 a 6 (come al gioco dei dadi), casuali sia per i giocatori che per il banco

var dado = Math.floor(Math.random() * (6-1) + 1);
var giocatore1 = {
  nome : 'Giocatore A',
  punteggio : Math.floor(Math.random() * (6-1) + 1)
};
var giocatore2 = {
  nome : 'Giocatore B',
  punteggio : Math.floor(Math.random() * (6-1) + 1)
};

// counts e closest non sono farina del mio sacco, ho dovuto cercare su stackoveflow :'(

var counts = [giocatore1.punteggio, giocatore2.punteggio];
var closest = counts.reduce(function(prev, curr) {
  return (Math.abs(curr - dado) < Math.abs(prev - dado) ? curr : prev);
});

// le righe che seguono sì però, le ho scritte io! :)

if (dado == giocatore1.punteggio == giocatore2.punteggio) {
  document.write(`Banco = ${dado}, ${giocatore1.nome} = ${giocatore1.punteggio}, ${giocatore2.nome} = ${giocatore2.punteggio}`);
  document.write(`<br>PAREGGIO!`);
}
else if (dado == giocatore1.punteggio) {
  document.write(`Banco = ${dado}, ${giocatore1.nome} = ${giocatore1.punteggio}, ${giocatore2.nome} = ${giocatore2.punteggio}`);
  document.write(`<br>${giocatore1.nome} VINCE!`);
}
else if (dado == giocatore2.punteggio) {
  document.write(`Banco = ${dado}, ${giocatore1.nome} = ${giocatore1.punteggio}, ${giocatore2.nome} = ${giocatore2.punteggio}`);
  document.write(`<br>${giocatore2.nome} VINCE!`);
}
else {
  document.write(`Banco = ${dado}, ${giocatore1.nome} = ${giocatore1.punteggio}, ${giocatore2.nome} = ${giocatore2.punteggio}`);
  document.write(`<br>Banco VINCE!`);
  switch (closest) {
    case giocatore1.punteggio:
      if (giocatore1.punteggio == giocatore2.punteggio) {
        document.write(`<br>Entrambi i giocatori hanno totalizzato lo stesso punteggio!`);
      }
      else document.write(`<br>Tra ${giocatore1.punteggio} e ${giocatore2.punteggio} il numero più vicino a ${dado} è ${closest}, per cui ${giocatore1.nome} si è avvicinato di più!`);
    break;
    case giocatore2.punteggio:
      if (giocatore1.punteggio == giocatore2.punteggio) {
        document.write(`<br>Entrambi i giocatori hanno totalizzato lo stesso punteggio!`);
      }
      else document.write(`<br>Tra ${giocatore1.punteggio} e ${giocatore2.punteggio} il numero più vicino a ${dado} è ${closest}, per cui ${giocatore2.nome} si è avvicinato di più!`);
    break;
  }
}
