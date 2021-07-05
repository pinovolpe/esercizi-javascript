/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

    <script>
      //https://www.gdipiro.com/javascript/5.arrayMultidimensionali/difficile/1.righeColonne.js.html.txt
      
      var N = prompt("Immetti il numero delle righe");
      var M = prompt("Immetti il numero delle colonne");
      var matrice = [];
      for (var i = 0; i < N; i++) {
        matrice[i] = [];
      }
      for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
          matrice[i][j] = Math.floor(Math.random() * 100 + 1);
        }
      }
      var R = [];
      var C = [];
      for (i = 0; i < N; i++) {
        R[i] = 0;
        for (j = 0; j < M; j++) {
          R[i] += Number(matrice[i][j]);
        }
      }
      for (j = 0; j < M; j++) {
        C[j] = 0;
        for (i = 0; i < N; i++) {
          C[j] += Number(matrice[i][j]);
        }
      }
      var risposta1 = "Input: N = " + N + ", M = " + M;
      var risposta2 = "Output:\n\tmatrice =\n\t[";
      for (i = 0; i < N; i++) {
        risposta2 += "\n\t\t[";
        risposta2 += matrice[i];
        risposta2 += "],";
      }
      risposta2 = risposta2.substr(0, risposta2.length - 1);
      risposta2 += "\n\t]";
      var risposta3 = "array R = [" + R + "]" + "\n" + "array C = [" + C + "]";
      alert(risposta1 + "\n" + risposta2 + "\n" + risposta3);
    </script>
