/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

    <script>
      var giorno = prompt("Il numero di un giorno della settimana");
      var risultato = verifica(giorno);
      if (risultato) {
        var gSettimana = cerca(giorno, risultato);
        alert(gSettimana);
      } else alert("Peccato, non posso indovinare il giorno.");

      function verifica(giorno) {
        if (giorno < 8 && giorno > 0) var flag = true;
        else var flag = false;
        return flag;
      }

      function cerca(giorno, risultato) {
        var settimana = [
          "Lunedi",
          "Martedi",
          "Mercoledi",
          "Giovedi",
          "Venerdi",
          "Sabato",
          "Domenica",
        ];
        return settimana[giorno - 1];
      }
    </script>
