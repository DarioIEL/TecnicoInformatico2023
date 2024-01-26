for(let i = 0; i < 3; i++){
    console.log("Ciao dal giro num " + i);
}

//adesso il ciclo parte da 1 e arriva al 10
for(let i = 1; i <= 12; i++){
    console.log("Sono le ore: " + i);
}

//I CICLI FOR SERVONO ANCHE A LEGGERE GLI ARRAY
//gli array sono una struttura dati nella quale è possibile salvare elementi simili tra loro. Praticamente è un contenitore.

//dichiaro un array. Gli array hanno la caratteristica di essere 0-based
//               0         1        2       3
let colori = ["rosso", "giallo", "verde", "blu"];

//Richiamo i singoli colori
// console.log( colori[0] ); //rosso
// console.log( colori[1] ); //giallo
// console.log( colori[2] ); //verde
// console.log( colori[3] ); //blu
// console.log( colori[4] ); //udefined

//stampo la prop length del mio array, cioè chiedo quante cose ci sono nell'array
console.log("Nell'array ci sono: " + colori.length);

for(let i = 0; i < colori.length; i++){
    console.log(colori[i]);
}

