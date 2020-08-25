import * as inquirer from 'inquirer';
import Veiculo from './entidades/Veiculo';

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
    }
    case 2: {
    }
    case 3: {
    }
    default:
      console.log('error');
      break;
  }
};

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
  console.log(resposta);
  return menu()
};

menu();
