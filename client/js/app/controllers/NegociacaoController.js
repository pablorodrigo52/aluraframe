/*
Um controller é capaz de capturar as informações do DOM
*/

class NegociacaoController {

    constructor (){
        let $ = document.querySelector.bind(document); // cria um alias para a função document.querySelector('');
        /* Simulando a sintaxe do jquery */    
        this._inputDate = $('#date').value;
        this._inputValor = $('#valor').value;
        this._inputQuantidade = $('#quantidade').value;

    }
    adiciona(event){
        event.preventDefault();
        // let negociacao = new Negociacao(
        //     new Date(this._inputDate.split('-')), // new Date(['YYYY', 'MM', 'DD']) == 'MM DD YYYY : 00h00m00s
        //     this._inputQuantidade,
        //     this._inputValor,
        // ); other way is:

        let negociacao = new Negociacao(
            new Date(
                this.inputData
                .split('-')
                .map(function(item, i){
                    return (i == 1) ? item - 1 : item; 
                })
            ), 
            this._inputQuantidade,
            this._inputValor
        );
    }

}