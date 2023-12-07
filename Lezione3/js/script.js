alert("Ciao Dario");

// eta è una variabile
let eta = window.prompt("Quanti anni hai ?");


/**
 * Questo è un commento multiriga
 * In questo controllo verifico l'età dell'utente
 */

if(eta < 18){
    alert("Mi dispiace ma non puoi accedere alla pagina!")
}else{
    alert("Benvenuto!");
}

// VARIABILI
let matricola = 100; //Tipo di dato: Number
let saluto = "Ciao, mi chiamo Dario";//Tipo di dato: String
let luce = false; //Tipo di dato: Boolean

//Stamperemo in console i tre valori
//scrive in console il valore della variabile
console.log(saluto);

console.log("La mia matricola è: " + matricola);

console.log("Luce: " + luce);

//JAVASCRIPT è debolmente tipizzato

let a = 5;
let b = 3;

let somma = a + b;

console.log("La somma vale " + a + b);
console.log(a + b);
console.log("La somma vale: " + somma);

//Uniamo i tre valori  per poi stamparli

