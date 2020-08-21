import Veiculo from './Veiculo';

export default class Carro extends Veiculo {
    constructor(veiculo: Veiculo) {
        veiculo.tipo = 'carro'
        super(veiculo)
    }
}