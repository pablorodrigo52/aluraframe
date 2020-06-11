class NegociacoesView extends View {
    /**
     * nesse exemplo, se quisermos, podemos emitir a declaração do construtor
     * porque ele também é herdado da classe View, mas, caso alguns dos filhos
     * de View recebam algum parametro a mais ou a menos em seus construtores,
     * o mesmo deve ser declarado, por conveniência deixarei o código assim
     */
    constructor(el){
        super(el); // referencia ao construtor da super class (View)
    }

    template(modelo){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                ${
                    modelo.negociacoes.map(n => 
                        `<tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>`
                    ).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${
                            // reduce vai trabalhar em cima de um array que eu tenha e vai me retornar um único valor
                            modelo.negociacoes.reduce((total, n) => total + n.volume, 0.0)
                        }
                    </td>
                </tfoot>
            </table>
        `;
    }
}
// (function(){   /* função auto invocada */
//     let total = 0;
//     modelo.negociacoes.forEach(n => total += n.volume);
//     return total;                                
// })()