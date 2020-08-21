export type veiculoTipo = 'carro' | 'moto';

export default class Veiculo {
    placa: string;
    cor: string;
    modelo: string;
    aluguelIni: Date | undefined | null;
    aluguelFim: Date | undefined | null;
    tipo: veiculoTipo;

    constructor({placa, cor, modelo, aluguelIni, aluguelFim, tipo}: {
        placa: string;
        cor: string;
        modelo: string;
        aluguelIni: Date | undefined | null;
        aluguelFim: Date | undefined | null;
        tipo: veiculoTipo;
    }){
        this.placa = placa;
        this.cor = cor;
        this.modelo = modelo;
        this.tipo = tipo;
        this.aluguelFim = aluguelFim;
        this.aluguelIni = aluguelIni;

    }
}