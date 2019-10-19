import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from './usuario';
import Validation from 'src/app/core/util/validation';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarioForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.builder.group({
      id:[],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      cep: ['',Validators.required],
      rua: ['',Validators.required],
      numero: ['',Validators.required],
      bairro: ['',Validators.required],
      cidade: ['',Validators.required],
      estado: ['',Validators.required],
    },{});
    
  }

  async onSubmit(usuario: Usuario) {
    if(this.usuarioForm.invalid){
      //Valida todos os campos do formulario
      Validation.allFormFields(this.usuarioForm);
    }else {
      // this.usuarioService.save(usuario)
      // .subscribe(usuario => {
      //   console.log("Usuário salvo!!!");
  
        //Redireciona para a lista de usuario
        // this.router.navigate(['/usuario']);
      // });
      console.log("Usuário salvo!!!");
    }
}
}
