//VAR...................

var frutta = "fragola";
console.log(nome);

{
    var frutta = "banana";
    console.log(nome);
    
     frutta = "mela";
    console.log(nome)
}

//LET..................

var nome = "Filippo";
console.log(nome);

{
   let nome = "Angelo";
   console.log(nome);
   
    nome = "Laura";
   console.log(nome)
}



//CONST.....................


var cognome = "Mura";
console.log(nome);

{
    const cognome = "balocco";
    console.log(cognome);

    //cognome = "Tedesco";
    //console.log(cognome);
    //NON SI PUO FARE
}


//BOOLEANI..................

12 == 20; //false
6 == 6; //true

9 == 9 && 6 < 10; //true and

9 == 0 && 10 > 6; //false and

9 == 0 && 10 < 6; //false and

9 == 0 || 10 > 6; //true or

9 == 0 || 10 < 6; //false or

!(12 == 20); //true not

!(12 == 12); //false not


var oggetto1 = "paletta";
var oggetto2 = "scopa";

var prima_comp = oggetto1 == oggetto2;

console.log(prima_comp); //true

console.log(!prima_comp); //false

console.log(oggetto1==oggetto2 || oggetto1 == "paletta"); //or

console.log(oggetto1==oggetto2 && oggetto1 == "paletta")  //and

console.log(oggetto1== "scopa" && oggetto1 == "paletta")  //and

//CONFRONTO..................

var namb1 = 76;

var namb2 = 54.3;

console.log(namb1 > namb2);

console.log(namb1 < namb2);

console.log(namb1 == namb2);

//OPERAZIONI...................

var numero = 3;
var numero1 = 9;

console.log(numero1 += numero);

var numero = 3;
var numero1 = 9;

console.log(numero1 -= numero);

var numero = 3;
var numero1 = 9;

console.log(numero1 *= numero);

var numero = 3;
var numero1 = 9;

console.log(numero1 /= numero);

 














