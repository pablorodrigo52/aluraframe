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
        this._listaNegociacao = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacao);
    }
    adiciona(event){
        event.preventDefault();
        this._listaNegociacao.add(this._negociacao());
        this._negociacoesView.update(this._listaNegociacao);
        this.resetForm();
    }

    _negociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this.dataValor), 
            this.quantidadeValor,
            this.valorValor
        );
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