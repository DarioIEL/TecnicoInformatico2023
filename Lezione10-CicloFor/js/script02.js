let nomiStudenti = [
    "Emanuele Bertino",
    "Fred Dumea",
    "Marco Di Fede",
    "Ammar Suleiman",
    "Nicolò Canalis",
    "Christian Spitaleri",
    "Giacomo Lussu",
    "Nouha Bouidra",
    "Dayron Toribio",
    "Amit Hossain",
    "Francesco Mazzetto",
    "Eddin Serkouh",
    "Cristian Depau",
    "Andrea Riva",
    "Alessio Bugilan",
    "Osman Lleshi",
    "Dario Mennillo"
];

//recupero il pezzetto di html chiamato demo
let demo = document.getElementById("demo");

for(let i = 0; i < nomiStudenti.length; i++){
    console.log(nomiStudenti[i]);
    //voglio controllare i singoli nomi: quando superano i 15 caratteri allora metti un asterisco.
    //il .length sulle parole conta i caratteri
    if(nomiStudenti[i].length >= 15 ){
        demo.innerHTML += "<li>" + nomiStudenti[i] + " * questo è maggiore di 15 </li>"
    }else{
        demo.innerHTML += "<li>"+ nomiStudenti[i] + "</li>";
    }
}

//Esercitazione
//Crea un array con i seguenti voti [100, 20, 50, 60, 65, 55, 80, 95]
//Scorri l'array e controlla i voti. Quando il voto è minore di 60 stampa un asterisco * accanto al voto. Quando invece è maggiore o uguale a 60 stampa una A accanto al voto. Quando il voto è 100 stampa AAA accanto al voto