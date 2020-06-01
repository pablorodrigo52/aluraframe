/*
Um controller é capaz de capturar as informações do DOM
*/

class NegociacaoController {

    constructor (){
        let $ = document.querySelector.bind(document); // cria um alias para a função document.querySelector('');
        /* Simulando a sintaxe do jquery */    
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');

    }
    adiciona(event){
        event.preventDefault();
        // let negociacao = new Negociacao(
        //     new Date(this._inputDate.split('-')), // new Date(['YYYY', 'MM', 'DD']) == 'MM DD YYYY : 00h00m00s
        //     this._inputQuantidade,
        //     this._inputValor,
        // ); other way is:
        let data = DateHelper.textoParaData(this.dataValor);
        let dataAjustada = DateHelper.dataParaTexto(data);
        let negociacao = new Negociacao(
            data, 
            this.quantidadeValor,
            this.valorValor
        );
        this.resetForm();
        console.log(negociacao);
        console.log(dataAjustada);
    }

    get dataValor(){
        return this._inputData.value;
    }
    get quantidadeValor(){
        return this._inputQuantidade.value;
    }
    get valorValor(){
        return this._inputValor.value;
    }

    resetForm(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

}