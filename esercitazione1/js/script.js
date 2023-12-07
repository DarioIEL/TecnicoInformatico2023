
let num1 = Number( window.prompt("Inserisci il primo numero") );
let num2 = Number( window.prompt("Inserisci il secondo numero") );

let somma = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let quoz = num1 / num2;

//per poter stampare sulla pagina uso il document.write()

document.write("Somma: " + somma + "<br>");
document.write("Differenza: " + diff + "<br>");
document.write("Prodotto: " + prod + "<br>");
document.write("Quoziente: " + quoz + "<br>");