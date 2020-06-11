class MensagemView extends View {
    /**
     * nesse exemplo, se quisermos, podemos emitir a declaração do construtor
     * porque ele também é herdado da classe View, mas, caso alguns dos filhos
     * de View recebam algum parametro a mais ou a menos em seus construtores,
     * o mesmo deve ser declarado, por conveniência deixarei o código assim
     */
    constructor(el){
        super(el); // referencia ao construtor da super class (View)
    }

    template(modelo){
        return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>` : `<p></p>`;
    }
}