class MensagemView{
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(modelo){
        return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>` : `<p></p>`;
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }
}