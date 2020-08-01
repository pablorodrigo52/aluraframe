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
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    console.log(xhr.responseText);
                    this._mensagem.texto = "Negociações importadas do servidor com sucesso.";
                    JSON.parse(xhr.responseText)
                    .map(element => new Negociacao(new Date(element.data), element.quantidade, element.valor))
                    .forEach(negociacao => this._listaNegociacao.add(negociacao));
                } else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível obter as negociações da semana';
                }
            }
        };
        xhr.send();
        /**
         * Estados possíveis de uma requisição ajax:
         * 0: requisição ainda não iniciada
         * 1: conexão com o servidor estabelecida
         * 2: requisição recebida
         * 3: processando requisição
         * 4: requisição concluída e a resposta esta pronta
         */
    }

}