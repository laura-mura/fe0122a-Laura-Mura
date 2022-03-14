
/*Scrivi un programma che dati due numeri di due ipotetici giocatori,
generi un numero casuale compreso tra 1 e 100 (zero escluso),
verifichi se uno dei due giocatori ha azzeccato il numero casuale,
e in caso contrario quale dei due si è avvicinato di più al numero.

Esempio:
  Input: giocatore 1 = 5, giocatore 2 = 10
  Output: Numero casuale generato = 7
          "Nessuno dei due ha azzeccato il numero casuale,
           ma il giocatore 1 si è avvicinato di più!"

Consigli:
Per generare un numero casuale utlizza la funzione javascript Math.random()
 che restituisce un intervallo compreso tra 0 e 1.
Il valore ottenuto dovrà essere convertito per ottenere un valore valido
 per il tuo intervallo, in questo modo:
  (Math.random() * (max-min) + min) ovvero, nel tuo caso:
  (Math.random() * (100-1) + 1)
Ricordati che il valore dovrà essere intero quindi dovrai 
arrontondarlo usando Math.floor()*/


 // inizializzazione variabili gamer1 e gamer2
 let gamer1: number= 10
 let gamer2: number = 20
 
 // dichiarazione function confronto passando parametri num1 e num2
 function confronto (num1, num2) {
   // inizializzazione di numero
   let numero = Math.floor((Math.random() * (100-1))+1);
   // inizializzazione di diff1 e diff2
   let diff1 = Math.abs(numero-num1), diff2 = Math.abs(numero-num1);
   console.log('Numero casuale generato = ', numero);
   // controllo tra numero e num1
   if(numero === num1){
     console.log('Il giocatore n1 ha indovinato \n');
     // controllo tra numero e num2
   } else if (numero === num2) {
     console.log('Il giocatore n2 ha indovinato \n');
     // controllo tra diff1 e diff2
   } else if (diff1 < diff2){
     console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più!');
   } else {
     console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');
   }
 
 }
 // chiamata della funzione con argomenti gamer1 e gamer 2
 confronto(gamer1, gamer2);
 