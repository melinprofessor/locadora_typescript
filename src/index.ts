import * as inquirer from 'inquirer';
import Veiculo from './entidades/Veiculo';
import Carro from './entidades/Carro';
import Moto from './entidades/Moto';

// simula um banco de dados para armazernar os veiculos
// salva durante a execução.

const listaVeiculos: Veiculo[] = [];

const menu = async () => {
  // desestrução de objetos e array
  // [] < array
  //  {} <- objeto

  const { menu }: { menu: number } = await inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'O que deseja fazer ?',
      choices: [
        {
          name: 'cadastrar veiculo?',
          value: 0,
        },
        {
          name: 'alugar veiculo ?',
          value: 1,
        },
        {
          name: 'devolver veiculo ?',
          value: 2,
        },
        {
          name: 'listar veiculos ?',
          value: 3,
        },
      ],
    },
  ]);

  switch (menu) {
    case 0: {
      await cadastarVeiculo();
      break;
    }
    case 1: {
      await alugarVeiculo();
      break;
    }
    case 2: {
      await devolverVeiculo();
      break;
    }
    case 3: {
      await listarVeiculo()
      break;
    }
    default:
      console.log('error');
      break;
  }
};

const listarVeiculo = async () => {
  Veiculo.listar(listaVeiculos);
  return menu();
}

const cadastarVeiculo = async () => {
  const resposta: Veiculo = await inquirer.prompt([
    {
      type: 'input',
      name: 'modelo',
      message: 'modelo do veiculo ?',
    },
    {
      type: 'input',
      name: 'cor',
      message: 'cor do veiculo ?',
    },
    {
      type: 'input',
      name: 'placa',
      message: 'placa do veiculo ?',
    },
    {
      type: 'rawlist',
      name: 'tipo',
      message: 'qual é o tipo do veiculo ?',
      choices: [
        {
          name: 'Carro',
          value: 'carro',
        },
        {
          name: 'Moto',
          value: 'moto',
        },
      ],
    },
  ]);
  let veiculo: Carro | Moto | undefined = undefined;

  if(resposta.tipo === 'carro') {
    veiculo = new Carro(resposta);
  } else {
    veiculo = new Moto(resposta);
  }
  await veiculo.cadastrar(listaVeiculos)
  return menu()
};

const alugarVeiculo =  async() => {
  const {placa}: {placa: string} = await inquirer.prompt([
    {
      type: 'input',
      name: 'placa',
      message: 'Digite a placa do veiculo ?',
    }])

    Veiculo.alugar(listaVeiculos, placa);
    return menu();
}

const devolverVeiculo =  async() => {
  const {placa}: {placa: string} = await inquirer.prompt([
    {
      type: 'input',
      name: 'placa',
      message: 'Digite a placa do veiculo ?',
    }])

    Veiculo.devolver(listaVeiculos, placa);
    return menu();
}

menu();
