import {Component, OnInit} from '@angular/core';

import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Usuario} from './usuario';
// import Validation from 'src/app/core/util/validation';

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
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', [Validators.required, Validators.maxLength(10)]],
      telefone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      cpfCnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      cep: ['', [Validators.required, Validators.maxLength(8)]],
      rua: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.minLength(3)]],
      bairro: ['', [Validators.required, Validators.minLength(3)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]  
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
