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
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione) {
        this.balanceInit = balanceInit;
        this.primaOperazione = primaOperazione;
        this.secondaOperazione = secondaOperazione;
        this.terzaOperazione = terzaOperazione;
        this.quartaOperazione = quartaOperazione;
    }
    //versamento
    SonAccount.prototype.oneDeposit = function (sommaAggiunta) {
        this.primaOperazione = this.balanceInit + sommaAggiunta;
        return this.balanceInit += sommaAggiunta;
    };
    //prelievo
    SonAccount.prototype.oneWithDraw = function (sommaPrelevata) {
        this.secondaOperazione = this.balanceInit + sommaPrelevata;
        return this.balanceInit -= sommaPrelevata;
    };
    //versamento
    SonAccount.prototype.twoDeposit = function (sommaAggiunta2) {
        this.terzaOperazione = this.balanceInit + sommaAggiunta2;
        return this.balanceInit += sommaAggiunta2;
    };
    //prelievo
    SonAccount.prototype.twoWithDraw = function (sommaPrelevata2) {
        this.quartaOperazione = this.balanceInit + sommaPrelevata2;
        return this.balanceInit -= sommaPrelevata2;
    };
    return SonAccount;
}());
