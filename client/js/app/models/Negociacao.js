class Negociacao{

    constructor(data, quantidade, valor){
        /* Existe uma convenção entre os desenvolvedores que atributos com underline não podem ser 
        acessados ou modificados, mas isso não é uma regra, é só uma convenção porque atualmente
        javascript não tem modificadores que bloqueiem o acesso ou escrita

         Quando minha variavel armazena objeto, como new Date() que é passado por parametro nesse caso
         ele ainda pode ser alterado se nesse objeto existir algum método capaz disso. Isso acontece porque
         Object.freeze é superficial, então para prevenir essa alteração faz-se uma cópia do objeto que é
         passado
        */
        this._data = new Date(data.getTime()); 
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // isso 'congela' um objeto em javascript o tornando imutável, mas ainda visivel
    };
    
    get volume(){
        return this._quantidade * this._valor;
    }
    get data(){
        return new Date(this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}