import {Component, OnInit} from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.findAll()
    .subscribe( usuarios => this.usuarios = usuarios);
  
  }
  
  onDelete(id: number) {
    this.usuarioService.deleteById(id)
    .subscribe(() => {
      //Remove o usuário da lista
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      console.log("Usuário deletado!!!");
    });
  }
}
