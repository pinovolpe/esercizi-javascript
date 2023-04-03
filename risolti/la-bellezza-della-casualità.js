/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

    <script>
      // var numeroInput = prompt("Il numero limite");
      // var numeroCasuale = Math.floor(Math.random() * (numeroInput - 1) + 1);

      // console.log(
      //   "numero Input:",
      //   numeroInput,
      //   " - ",
      //   "numero Casuale:",
      //   numeroCasuale
      // );

      function casuali() {
        numeroInput = parseInt(document.getElementById("quanti").value);
        var numeroCasuale = Math.floor(Math.random() * (numeroInput - 1) + 1);

        document.getElementById("casuali").innerHTML =
          "Numero limite:" +
          numeroInput +
          " - " +
          "Numero casuale:" +
          numeroCasuale;
      }
    </script>

    <p>
      Numero limite:
      <input type="text" id="quanti" />
      <input type="button" onclick="casuali()" value="Randomize!" />
    </p>
    <p id="casuali"></p>
