/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

// Primo e ultimo
function primoUltimo() {
  let a = 1;
  let b = -10;
  let c = 4;
  var max, min, med;

  if (a > b) { max = a; min = b; }
  else { max = b; min = a; }
  if (c > max) { med = max; max = c; }
  else if (c < min) { med = min; min = c; }
  else { med = c; }

  document.write('minore = ' + min + ', maggiore = ' + max);
}

primoUltimo();

// Variante
var variante = [3, 5, 10, 2, 8]
var maggiore = Math.max(...variante);
var minore = Math.min(...variante);

document.write('maggiore = ' + maggiore + ', minore = ' + minore);