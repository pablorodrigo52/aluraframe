class NegociacaoService{
    /**
     * Estados possíveis de uma requisição ajax:
     * 0: requisição ainda não iniciada
     * 1: conexão com o servidor estabelecida
     * 2: requisição recebida
     * 3: processando requisição
     * 4: requisição concluída e a resposta esta pronta
     */
    
    getWeekNegociations(){
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4){
                    if (xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText)
                                .map(element => new Negociacao(new Date(element.data), element.quantidade, element.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana.');
                    }
                }
            };
            xhr.send();           
        });
    }


    getPreviousWeekNegociations(){
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'negociacoes/anterior');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4){
                    if (xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText)
                                .map(element => new Negociacao(new Date(element.data), element.quantidade, element.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana.');
                    }
                }
            };
            xhr.send();           
        });
    }


    getPrePreviousWeekNegociations(){
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'negociacoes/retrasada');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4){
                    if (xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText)
                                .map(element => new Negociacao(new Date(element.data), element.quantidade, element.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana.');
                    }
                }
            };
            xhr.send();           
        });
    }



}