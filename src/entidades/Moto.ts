import Veiculo from './Veiculo';

class Moto extends Veiculo {
    constructor(moto: Veiculo){
        moto.tipo = 'moto';
        super(moto)
    }
}

export default Moto;