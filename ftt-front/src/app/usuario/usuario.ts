import { Endereco } from '../endereco/endereco';

export class Usuario{
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  telefone: string;
  cpfCnpj: string;
  endereco: Endereco;
  id?: number;
}
