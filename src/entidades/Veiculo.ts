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


    async cadastrar(listaVeiculos: Veiculo[]) {
        const existe = listaVeiculos.find((veiculo) => veiculo.placa === this.placa)
        if(existe) {
            console.log('Veiculo já esta cadastrado no sistema!');
            return;
        }
        // this => esta classes
        listaVeiculos.push(this);
        console.log('Veiculo cadastrado com sucesso!')
        return listaVeiculos;
    }

    static listar(listaVeiculos: Veiculo[]){
        console.log(listaVeiculos);
    }

    static alugar(listaVeiculos: Veiculo[], placa: string) {
        const veiculo = listaVeiculos.find((v) => v.placa === placa);
    }
}