import {Component, OnInit} from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuario: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.findAll()
    .subscribe( usuarios => this.usuario = usuarios);
  }
  onDelete(id: number) {
    this.usuarioService.deleteById(id)
    .subscribe(() => {
      console.log("Usuário deletado!!!");
      //Remove o usuário da lista
      this.usuario = this.usuario.filter(usuario => usuario.id !== id);
    });
  }
}
