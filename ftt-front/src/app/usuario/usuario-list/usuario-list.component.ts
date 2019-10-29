import {Component, OnInit} from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [
    {
        id: 1,
        nome: "Julia",
        sobrenome: "Botelho",
        cpfCnpj: "70531879186",
        telefone: "39461273648",
        dataNascimento: "2015/06/13", 
        endereco: {
            cep: "0130-924",
            cidade: "São Paulo",
            estado: "SP",
            rua: "Avenida Paulista",
            numero: 105,
            bairro: "Bela Vista"
        }
    }
];

  modalShow = false;
  usuario = Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    // this.usuarioService.findAll()
    // .subscribe( usuarios => this.usuarios = usuarios);
  
  }

  onModal(id: number){
    this.usuario = this.usuario.filter(usuario => usuario.id === id);
  }

  onDelete(id: number) {
    this.usuarioService.deleteById(id)
    .subscribe(() => { 
      console.log("Usuário deletado!!!");
      //Remove o usuário da lista
     // this.usuario = this.usuario.filter(usuario => usuario.id !== id);
    });
  }
}
