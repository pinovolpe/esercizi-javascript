/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

    <script>
      //https://www.gdipiro.com/javascript/5.arrayMultidimensionali/medio/1.sommaliTutti.js.html.txt
      
      var N = prompt("Inserisci il numero di righe");
      var M = prompt("Inserisci il numero di colonne");
      var matrice = Array();
      for (var i = 0; i < N; i++) {
        matrice[i] = Array();
      }
      for (i = 0; i < N; i++) {
        for (var j = 0; j < M; j++) {
          matrice[i][j] = Math.floor(Math.random() * 100 + 1);
        }
      }
      var somma = 0;
      var risposta1 = "Input: N = " + N + ", M = " + M;
      var risposta2 = "Output:\n\tmatrice = \n\t\[\n\t\t[";
      for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
          risposta2 += matrice[i][j] + ", ";
          somma += matrice[i][j];
        }
        risposta2 = risposta2.substr(0, risposta2.length - 2);
        risposta2 += "],\n\t\t[";
      }
      risposta2 = risposta2.substr(0, risposta2.length - 5);
      risposta2 += "\n\t]";
      alert(risposta1 + "\n" + risposta2 + "\n\n\tsomma = " + somma);
      console.log(matrice);
    </script>
