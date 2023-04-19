/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/

function palindrome(str) {
  var lowRegStr = str.toLowerCase().replace(/[\W_]/g, "");
  var reverseStr = lowRegStr.split("").reverse().join(""); 
  return reverseStr === lowRegStr;
}
palindrome("I topi non avevano nipoti");
