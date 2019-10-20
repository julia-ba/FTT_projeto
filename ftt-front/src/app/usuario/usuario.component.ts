import {Component, OnInit} from '@angular/core';

import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Usuario} from './usuario';
import Validation from 'src/app/core/util/validation';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.usuarioForm = this.builder.group({
      id: [],
      nome: ['', Validators.required, Validators.minLength(3)],
      sobrenome: ['', Validators.required, Validators.minLength(3)],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    }, {});

  }

  async onSubmit(usuario: Usuario) {
    if (this.usuarioForm.invalid) {
      // Valida todos os campos do formulario
      // Usar dependencia para dar o feedback que tem algo errado no formulario
    } else {
      console.log('Usuário salvo!!!');
    }
  }
}
