/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/

let n = 2;
let m = '2';

function uguaglianza(a, b) {
  if (a === b)
    return 'true';
  else
    return 'false';
}

document.write(uguaglianza(n, m));