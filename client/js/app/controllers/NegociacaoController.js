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

        //this._listaNegociacao = new ListaNegociacoes(model => this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacao);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    
    get _dataValor(){
        return this._inputData.value;
    }
    get _quantidadeValor(){
        return this._inputQuantidade.value;
    }
    get _valorValor(){
        return this._inputValor.value;
    }
    
    adiciona(event){
        event.preventDefault();
        this._listaNegociacao.add(this._negociacao());
        
        this._mensagem.texto = "Mensagem adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
        this.resetForm();
    }

    _negociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._dataValor), 
            this._quantidadeValor,
            this._valorValor
        );
    }

    apagar(){
        this._listaNegociacao.esvazia();
        // this._negociacoesView.update(this._listaNegociacao);
        this._mensagem.texto = "Negociações apagadas com sucesso.";
        this._mensagemView.update(this._mensagem);
    }

    resetForm(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

}