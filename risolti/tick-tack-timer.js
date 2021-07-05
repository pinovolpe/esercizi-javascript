/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/

//https://www.gdipiro.com/javascript/6.funzione/facile/3.timer.js.html.txt

	var secondi = 10;
		
	var t = window.setInterval(function(){
		document.writeln(secondi + '<br/>');
		secondi--;
		if(secondi < 0) clearInterval(t);
	},1000);

  /*
  SOLUZIONE ALTERNATIVA 1
  tempo(secondi);
	function tempo(secondi){
		var t = window.setInterval(function(){
			document.writeln(secondi + '<br/>');
			secondi--;
			if(secondi < 0) clearTimeout(t);
		},1000);
	}
  */
	
  /*
  SOLUZIONE ALTERNATIVA 2
  tempo(secondi);
  function tempo(secondi){
		var t = window.setTimeout(function(){
			document.writeln(secondi + '<br/>');
			secondi--;
			if(secondi >= 0) tempo(secondi);
		},1000);
	}
  */
