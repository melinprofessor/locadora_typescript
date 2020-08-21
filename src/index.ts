import Carro from './entidades/Carro';
import Moto from './entidades/Moto';

const carro = new Carro({
    placa: 'AVC123',
    cor: 'branco',
    modelo: 'Fiat',
    tipo: 'carro',
    aluguelFim: undefined,
    aluguelIni: undefined
})

const moto = new Moto({
    placa: 'AVC123',
    cor: 'branco',
    modelo: 'Fiat',
    tipo: 'moto',
    aluguelFim: undefined,
    aluguelIni: undefined
})
console.log(carro, moto);