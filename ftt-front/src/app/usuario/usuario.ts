import { Endereco } from '../endereco/endereco';

export class Usuario{
  nome: string;
  sobrenome: string;
  dataNascimento: string;
  telefone: string;
  cpfCnpj: string;
  endereco: Endereco;
  id?: number;
}
