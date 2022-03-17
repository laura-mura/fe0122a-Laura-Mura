/*Scrivere un programma che descriva e inizializzi le caratteristiche dei capi di abbigliamento
attraverso il costructor.
Utilizzare i metodi getsaldocapo(per applicare il saldo da sottrarre all acquisto del capo alla cassa)
 e il metodo getacquistocapo(che riporterà il costo totale di tale capo).
Successivamente utilizzi fetch per recuperare i capi dal file Abbigliamento.json,
dove son presenti tutte le caratteristiche dei capi di abbigliamento.

è necessario mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch.
Creare manualmente altre 3 istanze della classe creata precedentemente, scrivendo le caratteristiche dei capi a mano.
(vietato modificare il file Abbigliamento.json)

Dati:

proprietà:

        id:number
        codprod:number
        collezione:string
        capo:string
        modello:number
        quantita:number
        colore:string
        prezzoivaesclusa:number
        prezzoivainclusa:number
        disponibile:string
        saldo:number


        metodi:
        
        getsaldocapo:number
        getacquistocapo:number*/

        fetch('Abbigliamento.json')
        .then(res => res.json())
        .then(data => {

           data.forEach((item:any) =>{
           let capi = new Vestiti(item.id, item.codprod, item.collezione, item.capo, 
            item.modello, item.quantita, item.colore, item.prezzoivaesclusa, 
            item.prezzoivainclusa, item.disponibile, item.saldo)

            console.log(capi)
          })
        })


        class Vestiti{

            public id: number
            public codprod: number
            public collezione: string
            public capo: string
            public modello: number
            public quantita: number
            public colore: string
            public prezzoivaesclusa: number
            public prezzoivainclusa: number
            public disponibile: string
            public saldo: number
           
             
            constructor(id: number, codprod: number, collezione: string, capo: string, 
                modello: number, quantita: number, colore: string, prezzoivaesclusa: number, 
                prezzoivainclusa: number, disponibile: string, saldo: number){
                this.id = id
                this.codprod = codprod
                this.collezione = collezione
                this.capo = capo
                this.modello = modello
                this.quantita = quantita
                this.colore = colore
                this.prezzoivaesclusa = prezzoivaesclusa
                this.prezzoivainclusa = prezzoivainclusa
                this.disponibile = disponibile
                this.saldo = saldo
                
            } 

            public getSaldoCapo():number{
               return Math.ceil(this.prezzoivainclusa * this.saldo / 100)
            }

            public getAcquistoCapo():any{
               let sconto = this.prezzoivainclusa * this.saldo / 100
               return Math.ceil(this.prezzoivainclusa - sconto)
            }
        }

        let capo1= new Vestiti (1,2121,"primavera","cardigan",1231,5,"nero",18.50,22.57,"negozio",45)
        let capo2= new Vestiti (4,4111,"estate","t-shirt",1251,6,"rosso",5.50,6.71,"magazzino",30)
        let capo3= new Vestiti (3,1181,"inverno","felpa",1229,8,"beige",17.50,21.35,"negozio",50)

        console.log(capo1)
        console.log("Lo sconto è di " + capo1.getSaldoCapo() + "€")
        console.log("Il prezzo scontato è di " + capo1.getAcquistoCapo() + "€")

        console.log(capo2)
        console.log("Lo sconto è di " + capo2.getSaldoCapo() + "€")
        console.log("Il prezzo scontato è di " + capo2.getAcquistoCapo() + "€")

        console.log(capo3)
        console.log("Lo sconto è di " + capo3.getSaldoCapo() + "€")
        console.log("Il prezzo scontato è di " + capo3.getAcquistoCapo() + "€")

     