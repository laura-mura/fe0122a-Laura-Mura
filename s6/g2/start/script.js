// Quando il documento è pronto...
$(document).ready(function() {

    // collega i gestori evento per il click per tutti i tag h2.
    $("h2").click(function(evt){

    // crea una variabile ed immagazzina al suo interno il tag h2 che inizializza l'evento (usa .currentTarget).
    let titolo = $(evt.currentTarget);

    // attiva la classe .meno dei CSS sul tag h2.
    $(titolo).toggleClass("meno");

    // mostra o nascondi il div, utilizza un if-else.
    
    if(titolo.hasClass("meno")){ 
        $(titolo).next().show() 
    }
    else{ 
        $(titolo).next().hide(); 
    } 
    });


}); 

        // utilizza il prepreventDefault() per prevenire che il gestore eventi di default sia eseguito.
    

    // imposta il focus sul primo tag ancor dell'h2
