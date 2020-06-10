class NegociacoesView{
    constructor(elemento){
        this._elemento = elemento;
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }

    _template(modelo){
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