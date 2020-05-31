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
        let dataAjustada = new Date(...this.dataValor.split('-')//[SPREAD OPERATOR] desestruturando um array para os parametro que uma função aceita, no exemplo: new Date(YYYY, MM, DD)
            /* mas no exemplo do date o mês ele tem o padrão 0 - janeiro, 1 - fevereiro, etc.. 
            então precisa diminuir de um o mês somente */    
            .map((item, i) => (i == 1)?item-1 : item)  // em uma arrow function se eu só tenho uma instrução não preciso de {} e 'return'
        );
        let negociacao = new Negociacao(
            dataAjustada, 
            this.quantidadeValor,
            this.valorValor
        );
        this.resetForm();
        console.log(negociacao);
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