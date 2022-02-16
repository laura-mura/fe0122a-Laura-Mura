//FUNZIONE CON SOTTRAZIONE....

var sottrazione = function eta(anno_corrente, anno_nascita){
    return anno_corrente - anno_nascita;
}

console.log(sottrazione(2022, 1995));


//FUNZIONE FRECCIA........


saluto = (stringa) => document.write ("Ciao" + " a tutti!");

saluto ();

//FUNZIONE DENTRO UN'ALTRA FUNZIONE
function operazioni (){
    var num = 10;

    function somma () {
        console.log(num + num);
    }
    return somma();
}

operazioni();

//OPERATORI 

//OPERATORI UGUAGLIANZA E IDENTITà........

var x1 = 10;
var x2 = "10";
var x3 = "Cassandra";
var x4 = "Cassandra";

document.write ((x1 == x2) + "<br>");           // true

document.write ((x1 === x2) + "<br>");         // false

document.write ((x3 === x4) + "<br>");         // true


document.write ((x1 != x2) + "<br>");           // false

document.write ((x1 !== x2) + "<br>");           // true


//OPERATORE TERNARIO........
 var anni = 20;

 var ingresso = (anni < 18) ? "non puoi entrare" : "puoi entrare";

 console.log(ingresso);








