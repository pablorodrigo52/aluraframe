class ListaNegociacoes{
    /**
     * Utilizando padrão Proxy para disparar os triggers
     */
    
    constructor (trigger){
        this._negociacoes = [];
        // this._trigger = trigger;
    }

    add(negociacao){
        this._negociacoes.push(negociacao);
        // this._trigger(this);
        // Reflect.apply(this._trigger, this._context, [this]); // consigo passar um outro contexto para execução de uma função caso precise
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        // this._trigger(this);
        // Reflect.apply(this._trigger, this._context, [this]);
    }
}