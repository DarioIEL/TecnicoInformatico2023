let username = "Dario";
let password = "12345";
let statoAccesso = false;
let tipoAccount = "Premium";

if(username == "Dario" && password == "12345"){
    console.log("Benvenuto " + username);
    statoAccesso = true;
}else if(username != "Dario" && password == "12345"){
    console.log("Mi spiace, questo username non è registrato");
}else if(username == "Dario"  && password != "12345"){
    console.log("Mi spiace, password errata !");
}else{
    console.log("Mi spiace, non ti conosco non puoi entrare");
}

if(statoAccesso == true && tipoAccount == "Premium"){
    console.log("Hai accesso a tutti i contenuti della piattaforma");
}else if(statoAccesso == true && tipoAccount == "Base"){
    console.log("Hai accesso ai contenuti base della piattaforma");
}
else if(statoAccesso == true && (tipoAccount != "Base" || tipoAccount != "Premium")){
    console.log("Non hai ancora scelto un tipo di account");
}
else{
    console.log("Non hai ancora effettuato l'accesso");
}


