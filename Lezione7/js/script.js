//OPERATORI DI CONFRONTO
//tutte le volte che uso un operatore di confronto genero un tipo booleano

let num1 = 10;
let num2 = 10;

//Confronto i due numeri 
// == è uguale a 
let confronto1 = (num1 == num2); //true
console.log(confronto1);

//!= Non è uguale a 
let confronto2 = (num1 != num2); //false
console.log(confronto2);

//> Maggiore < Minore 
let confronto3 = (num1 > num2); //false
let confronto4 = (num1 < num2); //false


// >= e <=
let confronto5 = (num1 >= num2); //true
let confronto6 = (num1 <= num2); //true

//TUTTE QUESTE VARIABILI DI CONFRONTO POSSONO ESSERE UTILIZZATE NEGLI IF

let mioNome = "Dario";
let tuoNome = "dario";

let confronto7 = (mioNome != tuoNome); //true, poiché Javascript é CASE-SENSITIVE



//ESEMPIO IF

let etaBugilan = 18;
let etaAccesso = 18;

if(etaBugilan >= etaAccesso){
    //Questa parte viene eseguita solo se la condizione è vera
    console.log("Benvenuto Alessio, puoi entrare !");
}else{
    //Questa parte viene eseguita se la condizione è falsa
    console.log("Mi spiace Alesssio, torna a casa !");
}


////Faccio un altro controllo
let meteo = "Vento";

if(meteo == "Sole"){
    console.log("Oggi c'è il sole, metto gli occhiali scuri");
}else if(meteo == "Pioggia"){
    console.log("Oggi piove, porta l'ombrello");
}else if(meteo == "Nebbia"){
    console.log("Stai a casa che non si vede una mazza");
}else if(meteo == "Neve"){
    console.log("Attenzione oggi nevica, potresti scivolare");
}else if(meteo == "Vento"){
    console.log("Oggi c'è vento forte, copriti !");
}else{
    console.log("Non sono in grado di darti nessuna informazione");
}

//ATT: gli if si chiudono SEMPRE con un else

