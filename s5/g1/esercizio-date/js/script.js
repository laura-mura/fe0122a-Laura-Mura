//DATA ATTUALE
var dataAttuale = new Date();
//document.write(dataAttuale + '<br>');

//ELEMENTI SIGOLI DATA

document.querySelector("h1").innerHTML = dataAttuale;


document.getElementById("anno").innerText = dataAttuale.getFullYear();

document.getElementById("mese").innerText = dataAttuale.getMonth();

document.querySelector("p.giorno").innerText = dataAttuale.getDate();

//FORMATO EUROPEO

let lAnno = dataAttuale.getFullYear();
let ilMese = dataAttuale.getMonth();
let ilGiorno = dataAttuale.getDate();

let dataEuropea = ilGiorno + "/" + ilMese + "/" + lAnno; 
document.querySelector("h3").innerHTML = dataEuropea;

