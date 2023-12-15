//Simulazione VideoGame

//punteggi utente
let score = 40;
let exp = 30;

console.log("Punteggi utente: exp = " + exp + " --- " + "score = " +score);
//Per superare il livello del gioco lo score deve essere maggiore di 60 e l'exp deve essere maggiore di 45

// if(score >= 60 && exp >= 45){
//     console.log("Bravo, hai superato il livello !");
// }else{
//     console.log("Mi spiace, ritenta di nuovo");
// }

console.log("HARD MODE");

if(score >= 60 && exp >= 45){
    console.log("Bravo, hai superato il livello");
}else if(score < 60 && exp >= 45){
    console.log("Mi spiace ma il tuo score è sotto la soglia. La tua exp va bene ma non é sufficiente a passare il livello");
}else if(score >= 60 && exp < 45){
    console.log("Mi spiace la tua exp é sottosoglia. Il tuo score va bene ma non é sufficiente a passare il livello");
}else{
    console.log("Non hai superato il livello perché entrambi i punteggi sono sotto soglia");
}


/////////EASY MODE - OR Logico
//L'utente passa il livello anche con un solo punteggio sopra la soglia
console.log("EASY MODE");

if(score >= 60 || exp >= 45){ 
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Fai pena a questo gioco");
}
