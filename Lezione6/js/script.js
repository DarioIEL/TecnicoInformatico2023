// quando uso getElementById() tra le parentesi ci va l'id dell'elemento che voglio recuperare
let demo = document.getElementById("demo");

//Voglio scrivere all'interno di demo
// demo.innerHTML = "Ciao Dario";
demo.innerHTML = "<h2> Ciao Dario </h2>";

let feedback = document.getElementById("feedback");
feedback.innerHTML = "<h2> Ciao Bugilan </h2>";


/////Calcolatrice Scema
let dati = document.getElementById("dati");
let somma = document.getElementById("somma");
let differenza = document.getElementById("differenza");
let prodotto = document.getElementById("prodotto");
let quoziente = document.getElementById("quoziente");

// let numero1 = 12;
// let numero2 = 4;
// Il problema è che tutto ciò che viene recuperato da un input utente è considerato una stringa, quindi avrò problemi con le somme.

//Per risolvere questo problema devo fare il cast del dato, quindi forzarlo ad essere una number
let numero1 = Number( window.prompt("Inserisci il primo Numero") ) ;
let numero2 = Number( window.prompt("Inserisci il secondo Numero") );

 
let risSomma = numero1 + numero2; //16
let risDifferenza = numero1 - numero2; //8
let risProdotto = numero1 * numero2; // 48
let risQuoziente = numero1 / numero2;  //3

//devo stampare i risultati e i miei dati
dati.innerHTML = "<h2>I numeri di partenza sono : " + numero1 + " e " + numero2 + "</h2>";
somma.innerHTML = "<p> La somma vale: " + risSomma + "</p>";
differenza.innerHTML = "<p> La differenza vale: " + risDifferenza + "</p>";
prodotto.innerHTML = "<p> Il prodotto vale: " + risProdotto + "</p>";
quoziente.innerHTML = "<p> Il quoziente vale: " + risQuoziente + "</p>";
