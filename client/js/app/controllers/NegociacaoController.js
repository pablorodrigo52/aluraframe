/*
Um controller é capaz de capturar as informações do DOM manipular e interagir com outras classes.
*/

class NegociacaoController {

    constructor (){
        let $ = document.querySelector.bind(document); // cria um alias para a função document.querySelector('');
        /* Simulando a sintaxe do jquery */    
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');

        // faço uma associação com proxy factory dentro da classe bind para atualizar a view automaticamente
        // sem a necessidade de realizar isso na classe controller, deixando assim ela mais enxuta e legível
        this._listaNegociacao = new Bind( 
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'add', 'esvazia'
        );
        
        this._mensagem = new Bind(
            new Mensagem(), 
            new MensagemView($('#mensagemView')), 
            'texto'
        ); 
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
        this._mensagem.texto = "Negociações apagadas com sucesso.";
    }

    resetForm(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

    importarNegociacoes(){
        new NegociacaoService().getNegociations(this._listaNegociacao, this._mensagem.texto);
    }

}