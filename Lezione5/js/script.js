
// let identifica la variabile;
let mioNome = "Dario";

let mioCognome = "Mennillo";

let eta = 34;

//l'operatore + viene utilizzato per concatenare le stringhe
let saluto = "Ciao " + mioNome + " " + mioCognome + ", hai " + eta + " anni";
console.log(saluto);

//sistema alternativo per definire una stringa
//il simbolo ` si fa con alt+96

let saluto2 = `Ciao ${mioNome} ${mioCognome}, hai ${eta} anni`;
console.log(saluto2);

//1. seleziono l'elemento nello html in cui voglio stampare
//ATT: la stringa "elSaluto" deve essere identica all'ID
let elSaluto = document.getElementById("elSaluto");

//2. Stampo nell'elSaluto la mia variabile
elSaluto.innerHTML = saluto2;
  
// let num1 = 5;
// let num2 = 8;
// let prodotto = num1 * num2;
// console.log(`Il risultato è ${prodotto}`);

let elDemo = document.getElementById("elDemo");

let titoloDemo = "<h2> Calcolatrice </h2>";

let introDemo  = "<p> Questa calcolatrice esegue solo il prodotto </p>";

elDemo.innerHTML = titoloDemo + introDemo;

//////elFeed riempito direttamente, senza variabili

let elFeed = document.getElementById("elFeed");

elFeed.innerHTML = `
    <h2>Lista Studenti</h2>
    <ul>
        <li>Marco</li>
        <li>Cristian</li>
        <li>Nouha</li>
        <li>Osman</li>
    </ul>`;

