class NegociacaoService{
    /**
     * Estados possíveis de uma requisição ajax:
     * 0: requisição ainda não iniciada
     * 1: conexão com o servidor estabelecida
     * 2: requisição recebida
     * 3: processando requisição
     * 4: requisição concluída e a resposta esta pronta
     */

     constructor(){
         this.http = new HttpService();
     }
    
    getWeekNegociations(){
        return this.http
            .get('negociacoes/semana')
            .then(negociacoes => 
                negociacoes.map(element => new Negociacao(new Date(element.data), element.quantidade, element.valor))
            )
            .catch(error =>{
                console.log(error);
                throw new Error('Não foi possível obter as negociações da semana.');
            });
    }

    getPreviousWeekNegociations(){
        return this.http
            .get('negociacoes/anterior')
            .then(negociacoes => 
                negociacoes.map(element => new Negociacao(new Date(element.data), element.quantidade, element.valor))
            )
            .catch(error =>{
                console.log(error);
                throw new Error('Não foi possível obter as negociações da semana anterior.');
            });
    }


    getPrePreviousWeekNegociations(){
        return this.http
            .get('negociacoes/retrasada')
            .then(negociacoes => 
                negociacoes.map(element => new Negociacao(new Date(element.data), element.quantidade, element.valor))
            )
            .catch(error =>{
                console.log(error);
                throw new Error('Não foi possível obter as negociações da semana retrasada.');
            });
    }
}