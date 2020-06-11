class MensagemView extends View {
    constructor(el){
        super(el); // referencia ao construtor da super class (View)
    }

    template(modelo){
        return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>` : `<p></p>`;
    }
}