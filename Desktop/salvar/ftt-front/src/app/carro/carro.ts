import { Garagem } from "src/app/garagem/garagem";

export class Carro {
    
    id: number;
    fabricante: string;
    modelo: string;
    versao: string;
    descricao: string;
    cor: string;
    valor: string;
    garagem: Garagem;
    
}