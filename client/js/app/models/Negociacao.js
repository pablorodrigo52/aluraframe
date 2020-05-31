class Negociacao{

    constructor(data, quantidade, valor){
        /* Existe uma convenção entre os desenvolvedores que atributos com underline não podem ser 
        acessados ou modificados, mas isso não é uma regra, é só uma convenção porque atualmente
        javascript não tem modificadores que bloqueiem o acesso ou escrita
        */
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // isso 'congela' um objeto em javascript o tornando imutável, mas ainda visivel
    };
    
    get volume(){
        return this._quantidade * this._valor;
    }
    get data(){
        return this._data;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}