// Quando il documento è pronto...

$(document).ready(() => {

 //gestisco il click sul pulsante Iscriviti
    
    $("#iscr-news").click(function() {

        // inizializzo una variabile di controllo a true
        var controllo = $("#nome").val();
        

        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        if ( controllo == ""){
            $("#nome").next().text("Richiesto");
        }
          // nell'else uso next e text per impostare l'elemento span adiacente
        else {$("#nome").next().text(""); 
        };

         // assegno a due variabili il valore dei due campi email
        var controllo1 = $("#email-1").val();
        var controllo2 = $("#email-2").val();

        // ripeto la condizione nel nome anche per l'email
         if ( controllo1 == ""){
            $("#email-1").next().text("Richiesto");
        }
        else {$("#email-1").next().text(""); 
        };

        if ( controllo2 == ""){
            $("#email-2").next().text("Richiesto");
        }
        else {$("#email-2").next().text(""); 
        };

        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse
        if (controllo1 != controllo2){ 
            alert("Attenzione: le email non corrispondono");
        };

        //invio del form se tutti i campi sono validi
        if(controllo != "" && controllo1 != "" && controllo2 != ""
           && controllo1 == controllo2){
             $("#form-email").submit(function(){
            alert("form inviato!");
        });
        
        };

          
        

    });

      
        
       
       
      
        
       
        
        
        
        

        

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
});

   
