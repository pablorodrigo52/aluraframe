class Conta{
    constructor(saldo){
        this._saldo = saldo;
        this._child = new.target.name;
    }

    get saldo (){
       return this._saldo;
    }
    set saldo (s){
        this._saldo = s;
    }

    atualiza(taxa){
        throw new Error(`You must define the method 'atualiza' in ${this._child}`);
    }
}