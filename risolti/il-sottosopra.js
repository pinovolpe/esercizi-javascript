/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

    <script>
      //https://stackoverflow.com/questions/4492678/swap-rows-with-columns-transposition-of-a-matrix-in-javascript
      
      function transpose(matrix) {
        return Object.keys(matrix[0]).map((colNumber) =>
          matrix.map((rowNumber) => rowNumber[colNumber])
        );
      }

      console.log(
        transpose([
          [1, 2],
          [3, 4],
          [5, 6],
        ])
      );
    </script>
