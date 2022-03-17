
/*Scrivere un programma che crei due classi SonAccount e MotherAccount per la gestione di due conto correnti, 
che esegua le medesime operazioni di versamento e prelievo,
con in aggiunta il calcolo dell'interesse del conto corrente presente nella classe MotherAccount,
stampando il saldo attuale di entrambi i conto correnti.

Dati:

proprietà:

balanceInit:number=0  // saldo attuale 0

metodi:

oneDeposit:number // versamento
oneWithDraw // prelievo
twoDeposit:number // versamento
twoWithDraw // prelievo
addInterest// interesse MotherAccount 10%*/

class SonAccount{
   public balanceInit: number; //saldo attuale 0
   public primaOperazione: number; //saldo prima operazione
   public secondaOperazione: number; //saldo seconda operazione
   public terzaOperazione: number; //saldo terza operazione
   public quartaOperazione: number;

   constructor(balanceInit: number, primaOperazione: number, secondaOperazione: number, 
       terzaOperazione: number, quartaOperazione: number) {
       this.balanceInit = balanceInit;
       this.primaOperazione = primaOperazione;
       this.secondaOperazione = secondaOperazione;
       this.terzaOperazione = terzaOperazione;
       this.quartaOperazione = quartaOperazione;
   }
   
   //versamento
   oneDeposit(sommaAggiunta:number):number{
       this.primaOperazione = this.balanceInit + sommaAggiunta;
       return this.balanceInit += sommaAggiunta;
   }

   //prelievo
   oneWithDraw(sommaPrelevata:number):number{
       this.secondaOperazione = this.balanceInit + sommaPrelevata;
       return this.balanceInit -= sommaPrelevata;
   }

   //versamento
   twoDeposit(sommaAggiunta2:number):number{
       this.terzaOperazione = this.balanceInit + sommaAggiunta2;
       return this.balanceInit += sommaAggiunta2;
   }

   //prelievo
    twoWithDraw(sommaPrelevata2:number):number{
    this.quartaOperazione = this.balanceInit + sommaPrelevata2;
    return this.balanceInit -= sommaPrelevata2;
    }
}

class MotherAccount extends SonAccount{
    public interest: number;

    constructor(balanceInit: number, primaOperazione: number, secondaOperazione: number, 
        terzaOperazione: number, quartaOperazione: number, interest: number) {
            super(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione);
            this.interest = interest;
        }
  
    addInterest(i: number): number{
        this.interest = this.balanceInit + i;
        return this.balanceInit + i;
    }

}

