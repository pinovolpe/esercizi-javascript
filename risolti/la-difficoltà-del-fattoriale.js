/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

    <script>
      var num = prompt("Indica un numero per calcolarne il fattoriale");
      var fatt = fattoriale(Number(num));

      function fattoriale(numero) {
        var risultato = 1;
        for (var i = 2; i < numero + 1; i++) {
          risultato *= i;
        }
        return risultato;
      }
      alert(`Il fattoriale di ${num} è ${fatt}`);
    </script>
