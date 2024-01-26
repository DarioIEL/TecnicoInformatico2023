let n = 100;

for(let i = 0; i < n; i++){

    console.log("Ciao " + i);
}

//0-based        0         1        2         3
let colori = ["bianco", "rosso", "verde", "azzurro"];

for(let i = 0; i < colori.length; i++){
    console.log(colori[i]);
}

colori.forEach(colore =>{
    console.log(colore);
})

for (const iterator of colori) {
    console.log(iterator + " colore ");
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }