class DateHelper{
    textoParaData(texto){
        // let dataAjustada = new Date(...this.dataValor.split('-')//[SPREAD OPERATOR] desestruturando um array para os parametro que uma função aceita, no exemplo: new Date(YYYY, MM, DD)
        //     /* mas no exemplo do date o mês ele tem o padrão 0 - janeiro, 1 - fevereiro, etc.. 
        //     então precisa diminuir de um o mês somente */    
        //     .map((item, i) => (i == 1)?item-1 : item)  // em uma arrow function se eu só tenho uma instrução não preciso de {} e 'return'
        // );
        return new Date(...texto.split('-').map((item,i) => (i==1)? item - 1 : item));
    }

    dataParaTexto(data){
        return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
    }
}