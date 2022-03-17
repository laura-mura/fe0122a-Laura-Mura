/*Scrivere un programma utilizzando la programmazione ad oggetti che calcoli le tasse
che dovranno sostenere i singoli lavoratori autonomi al fine di verificare il
reddito annuo netto di ognuno a secondo del proprio reddito annuo lordo, tasse, cod redditività.
Il programma utilizza classi astratte e non astratte.

Dati:

proprietà:

codredd: number;
redditoannuolordo:number
tasseinps:number
tasseirpef:number

metodi:

getUtileTasse:number
getTasseInps:number
getTasseIrpef:number
getRedditoAnnuoNetto:number*/

interface tasse{
    tasseInps:number;
    tasseIrpef: number;
}

abstract class ioPago {
     
    public redditoAnnuoLordo: number;
    public tasseInps: number;
    public tasseIrpef: number;
    public 
    public tasse: number;

    constructor(redditoAnnuoLordo: number, 
        tasseInps: number, tasseIrpef: number, redditoNetto1: number, redditoNetto2: number, tasse:number){
            
            this.redditoAnnuoLordo = redditoAnnuoLordo;
            this.tasseInps = tasseInps;
            this.tasseIrpef = tasseIrpef;
            this.
            this.tasse = tasse;
        }

        getUtileTasse(tasseIrpef:number):number{
            this.tasse = this.tasseInps + tasseIrpef;
            return this.tasseInps + tasseIrpef;
        }


        getTasseInps(tasseInps:number): number {
           
        }

        getTasseIrpef(tasseIrpef:number): number {
            
        }
        
        getRedditoAnnuoNetto()


}


