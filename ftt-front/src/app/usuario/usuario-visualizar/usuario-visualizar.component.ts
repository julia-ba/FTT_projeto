import {Component, OnInit} from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-visualizar',
  templateUrl: './usuario-visualizar.component.html',
})
export class UsuarioVisualizarComponent implements OnInit {
  usuario: Usuario  = {
    id: null, 
    telefone: null, 
    nome: null, 
    cpfCnpj: null, 
    sobrenome: null, 
    dataNascimento: null, 
    endereco: {
      cep: null,
      bairro: null,
      cidade: null,
      estado: null,
      rua: null,
      numero: null
    }
  };

  constructor(
      private usuarioService: UsuarioService,
      private route: ActivatedRoute,
      private router: Router
      ) { }

  ngOnInit() {
    //recebe o id da url e faz a requisição para buscar um usuário pelo id
    const id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.findById(parseInt(id)).subscribe((u: Usuario) => {
      this.usuario = u;
    });
  } 
  //Deleta o usuário e retorna para a página de lista
  onDelete(id: number) {
    this.usuarioService.deleteById(id)
    .subscribe(() => { 
      console.log("Usuário deletado!!!");

      this.router.navigate(['/usuario']);
    });
  }
}
