class ContaPoupanca extends Conta{
    /**
     * como o construtor é o mesmo que o encontrado na classe Conta,
     * é opcional declarar ou não
     */

    atualiza(taxa){
        return this.saldo += (taxa*2);
     }
}