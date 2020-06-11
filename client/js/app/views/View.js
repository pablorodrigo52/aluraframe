class View{
    constructor(elemento){
        this._elemento = elemento;
        this._child = new.target.name;
    }

    update(modelo){
        this._elemento.innerHTML = this.template(modelo);
    }

    template(){
        throw new Error(`You must implement the _template method on ${this._child}`);
    }
}