import {Component, OnInit} from '@angular/core';

import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import { Usuario } from '../usuario';
import Validation from 'src/app/core/util/validation';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

function validacaoCpfCnpj(control: FormControl){
  const cpfCnpj = control.value
  
  if(cpfCnpj.length === 14){ 
    return validarCPF(cpfCnpj) ? null : { 
      cpfError: { //Cpf inválido
        cpfCnpj
      }
    }
  }else if(cpfCnpj.length === 18){
    return validarCnpj(cpfCnpj) ? null : {
      cnpjError: { //Cnpj inválido
        cpfCnpj
      }
    }
  }else{
    return {
      cpfCnpjError:{//Cpf e Cnpj inválidos
        cpfCnpj  
      }
    }
  }

}

//Função que valida se o CPF é válido
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf === '') {
    return false;
  }
  if (cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999') {
    return false;
  }
  let add = 0;
  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(9))) {
    return false;
  }
  add = 0;
  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i);
  }
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}
//Função que valida se o CNPJ é válido
function validarCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (!cnpj || cnpj.length !== 14
    || cnpj === '00000000000000'
    || cnpj === '11111111111111'
    || cnpj === '22222222222222'
    || cnpj === '33333333333333'
    || cnpj === '44444444444444'
    || cnpj === '55555555555555'
    || cnpj === '66666666666666'
    || cnpj === '77777777777777'
    || cnpj === '88888888888888'
    || cnpj === '99999999999999') {
    return false;
  }
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) {
    return false;
  }
  tamanho++;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) {
    console.log(cnpj);
    return false;
  }
  return true;
}


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: Usuario;

  constructor(private builder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    
    this.usuarioForm = this.builder.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', [Validators.required, Validators.maxLength(10)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)]],
      cpfCnpj: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(18),
        validacaoCpfCnpj
        ]], 
      endereco: this.builder.group({
        id:[], 
        cep: ['', [Validators.required, Validators.maxLength(8)]],
        rua: ['', [Validators.required, Validators.minLength(3)]],
        numero: ['', [Validators.required, Validators.minLength(3)]],
        bairro: ['', [Validators.required, Validators.minLength(3)]],
        cidade: ['', [Validators.required, Validators.minLength(3)]],
        estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]   
      })      
    }, {});
    // verifica se tem o id na roda e preeche o formulário com os dados do backend
    if(id){
      this.usuarioService.findById(parseInt(id)).subscribe((u: Usuario) => {
        u.dataNascimento = new Date(u.dataNascimento.split(' ')[0]).toISOString().split('T')[0];
        this.usuarioForm.patchValue(u);
      });
    }
    
  }
  //Salva dados de usuario
  onSave(usuario: Usuario){
    console.log(usuario)
    if(this.usuarioForm.invalid){
      //Valida todos os campos do formulario
      Validation.allFormFields(this.usuarioForm);
    } else {
      this.usuarioService.save(usuario)
      .subscribe((usuario: Usuario) => {
        console.log("Usuario salvo!!!");

        //Redireciona para a lista de (usuario: Usuario) --> alterar aq dps da listagem
        this.router.navigate(['/usuario']); 
        });
      }
    } 
  }

