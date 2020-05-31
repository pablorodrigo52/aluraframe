class Negociacao{

    constructor(data, quantidade, valor){
        /* Existe uma convenção entre os desenvolvedores que atributos com underline não podem ser 
        acessados ou modificados, mas isso não é uma regra, é só uma convenção porque atualmente
        javascript não tem modificadores que bloqueiem o acesso ou escrita
        */
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    };
    
    getVolume(){
        return this._quantidade * this._valor;
    }

    getData(){
        return this._data;
    }
    getQuantidade(){
        return this._quantidade;
    }
    getValor(){
        return this._valor;
    }
}